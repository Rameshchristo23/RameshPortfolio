import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 1️⃣ Email sent to YOU
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: "rameshchristo33@gmail.com",
      subject: "New Contact Form Submission",
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #c1c1c1; font-family: Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #c1c1c1; padding: 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
              <h2 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600;">New Contact Form Message</h2>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <!-- Name Row -->
                <tr>
                  <td style="padding: 15px; background-color: #f8f9fa; border-left: 4px solid #667eea;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="font-weight: 600; color: #333333; font-size: 14px; padding-bottom: 5px;">Name</td>
                      </tr>
                      <tr>
                        <td style="color: #555555; font-size: 16px;">${name}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <!-- Spacer -->
                <tr><td style="height: 15px;"></td></tr>
                
                <!-- Email Row -->
                <tr>
                  <td style="padding: 15px; background-color: #f8f9fa; border-left: 4px solid #667eea;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="font-weight: 600; color: #333333; font-size: 14px; padding-bottom: 5px;">Email</td>
                      </tr>
                      <tr>
                        <td style="color: #555555; font-size: 16px;">
                          <a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <!-- Spacer -->
                <tr><td style="height: 15px;"></td></tr>
                
                <!-- Message Row -->
                <tr>
                  <td style="padding: 15px; background-color: #f8f9fa; border-left: 4px solid #667eea;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="font-weight: 600; color: #333333; font-size: 14px; padding-bottom: 5px;">Message</td>
                      </tr>
                      <tr>
                        <td style="color: #555555; font-size: 16px; line-height: 1.6;">${message}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #e0e0e0;">
              <p style="margin: 0; color: #999999; font-size: 12px;">This message was sent from your website contact form</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`,
    });

    // 2️⃣ Auto-reply to USER
    await transporter.sendMail({
      from: `"Ramesh Christo" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank you for contacting me!",
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #c1c1c1; font-family: Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #c1c1c1; padding: 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          
          <!-- Header Banner -->
          <tr>
            <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 50px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: 700; letter-spacing: 1px;">Thank You!</h1>
              <p style="margin: 10px 0 0 0; color: #e0e7ff; font-size: 16px;">Your message has been received</p>
            </td>
          </tr>
          
          <!-- Main Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <p style="margin: 0 0 20px 0; color: #333333; font-size: 16px; line-height: 1.6;">
                Hi <strong style="color: #667eea;">${name}</strong>,
              </p>
              
              <p style="margin: 0 0 20px 0; color: #555555; font-size: 16px; line-height: 1.6;">
                Thank you for reaching out! I have received your message and will get back to you soon.
              </p>
              
              <div style="margin: 30px 0; padding: 20px; background-color: #f8f9fa; border-left: 4px solid #667eea; border-radius: 4px;">
                <p style="margin: 0; color: #666666; font-size: 14px; line-height: 1.5;">
                  <strong style="color: #333333;">Quick Response Time:</strong> I typically respond within 24-48 hours. 
                  If your matter is urgent, please feel free to follow up.
                </p>
              </div>
              
              <p style="margin: 30px 0 5px 0; color: #333333; font-size: 16px; line-height: 1.6;">
                Warm Regards,
              </p>
              <p style="margin: 0; color: #667eea; font-size: 18px; font-weight: 600;">
                Ramesh Christo
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #2d3748; padding: 30px; text-align: center;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding-bottom: 15px;">
                    <h3 style="margin: 0; color: #ffffff; font-size: 18px; font-weight: 600;">Ramesh Christo</h3>
                    <p style="margin: 5px 0 0 0; color: #a0aec0; font-size: 14px;">Professional | Developer | Creator</p>
                  </td>
                </tr>               
                <tr>
                  <td style="padding-top: 15px;">
                    <p style="margin: 0; color: #718096; font-size: 12px;">
                      © ${new Date().getFullYear()} Ramesh Christo. All rights reserved.
                    </p>
                    <p style="margin: 5px 0 0 0; color: #718096; font-size: 11px;">
                      This is an automated message. Please do not reply directly to this email.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`,
    });

    return new Response(
      JSON.stringify({ success: true, message: "Emails sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Email Error:", error);
    return new Response(
      JSON.stringify({ success: false, error: "Failed to send email." }),
      { status: 500 }
    );
  }
}
