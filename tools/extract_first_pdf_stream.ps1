function Decode-Ascii85 {
  param([string]$InputText)

  $clean = ($InputText -replace '\s', '')
  $clean = $clean -replace '~>.*$', ''
  $bytes = New-Object System.Collections.Generic.List[byte]
  $i = 0

  while ($i -lt $clean.Length) {
    if ($clean[$i] -eq 'z') {
      [void]$bytes.AddRange([byte[]](0, 0, 0, 0))
      $i++
      continue
    }

    $chunkLen = [Math]::Min(5, $clean.Length - $i)
    $chunk = $clean.Substring($i, $chunkLen)
    $origLen = $chunk.Length

    if ($origLen -lt 5) {
      $chunk += ('u' * (5 - $origLen))
    }

    [uint32]$value = 0
    foreach ($c in $chunk.ToCharArray()) {
      $value = [uint32]($value * 85 + ([int][char]$c - 33))
    }

    $tmp = [byte[]]::new(4)
    $tmp[0] = ($value -shr 24) -band 0xFF
    $tmp[1] = ($value -shr 16) -band 0xFF
    $tmp[2] = ($value -shr 8) -band 0xFF
    $tmp[3] = $value -band 0xFF

    if ($origLen -lt 5) {
      [void]$bytes.AddRange($tmp[0..($origLen - 2)])
    } else {
      [void]$bytes.AddRange($tmp)
    }

    $i += $chunkLen
  }

  return $bytes.ToArray()
}

function Inflate-Bytes {
  param([byte[]]$Data)

  $ms = New-Object System.IO.MemoryStream
  $ms.Write($Data, 0, $Data.Length)
  $ms.Position = 0

  $out = New-Object System.IO.MemoryStream
  $ds = New-Object System.IO.Compression.DeflateStream($ms, [System.IO.Compression.CompressionMode]::Decompress)
  $ds.CopyTo($out)
  $ds.Dispose()
  $ms.Dispose()

  $result = $out.ToArray()
  $out.Dispose()
  return $result
}

$pdfPath = 'C:\Users\furkan\Downloads\ProveKit_KitStart_Blueprint_v3.pdf'
$content = Get-Content $pdfPath -Raw
$match = [regex]::Match(
  $content,
  '5 0 obj\s*<<.*?>>\s*stream\r?\n(.*?)\r?\nendstream',
  [System.Text.RegularExpressions.RegexOptions]::Singleline
)

if ($match.Success) {
  $stream = $match.Groups[1].Value
  $decoded = Decode-Ascii85 $stream
  $inflated = Inflate-Bytes $decoded
  Write-Output ("decoded={0}" -f $decoded.Length)
  Write-Output ("inflated={0}" -f $inflated.Length)
  [System.Text.Encoding]::ASCII.GetString($inflated)
} else {
  Write-Output 'stream not found'
}
