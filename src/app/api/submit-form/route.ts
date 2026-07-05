import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

type FormAnswer = {
  question: string;
  answer?: string;
};

type SelectedSpot = {
  dateRange?: string;
  spots?: string;
  sector?: string;
  expertise?: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function formatAnswer(answer: FormAnswer) {
  const question = escapeHtml(answer.question);
  const value = escapeHtml(answer.answer?.trim() || 'Not answered');

  return `
    <tr>
      <td style="padding:12px 14px;border-bottom:1px solid #eee;font-weight:700;color:#111827;">${question}</td>
      <td style="padding:12px 14px;border-bottom:1px solid #eee;color:#374151;">${value}</td>
    </tr>
  `;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      answers?: FormAnswer[];
      email?: string;
      formType?: string;
      city?: string;
      selectedSpot?: SelectedSpot;
    };
    const answers = Array.isArray(body.answers) ? body.answers : [];
    const email = body.email?.trim();
    const formType = body.formType?.trim() || 'Company brief';
    const city = body.city?.trim();
    const selectedSpot = body.selectedSpot;

    if (!email) {
      return NextResponse.json({ error: 'Work email is required.' }, { status: 400 });
    }

    const html = `
      <div style="font-family:Arial,sans-serif;line-height:1.5;color:#111827;">
        <p><strong>${escapeHtml(formType)}</strong></p>
        ${
          city || selectedSpot
            ? `
              <table style="width:100%;border-collapse:collapse;border:1px solid #eee;border-radius:12px;overflow:hidden;margin:0 0 16px;">
                <tbody>
                  ${city ? formatAnswer({ question: 'City', answer: city }) : ''}
                  ${
                    selectedSpot
                      ? formatAnswer({
                          question: 'Selected spot',
                          answer: [
                            selectedSpot.dateRange,
                            selectedSpot.spots,
                            selectedSpot.sector,
                            selectedSpot.expertise,
                          ]
                            .filter(Boolean)
                            .join(' | '),
                        })
                      : ''
                  }
                </tbody>
              </table>
            `
            : ''
        }
        <p>See answers below</p>
        <table style="width:100%;border-collapse:collapse;border:1px solid #eee;border-radius:12px;overflow:hidden;">
          <tbody>
            ${answers.map(formatAnswer).join('')}
          </tbody>
        </table>
      </div>
    `;

    if (!resend) {
      return NextResponse.json({ error: 'Email service is not configured.' }, { status: 500 });
    }

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'furkantpack@gmail.com',
      subject: formType === 'City spot booking' ? `New Spot Booking - ${city || 'City'}` : 'New Form Submission',
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('submit-form error', error);
    return NextResponse.json({ error: 'Unable to submit form.' }, { status: 500 });
  }
}
