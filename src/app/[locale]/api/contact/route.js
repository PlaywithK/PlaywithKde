import { Resend } from "resend";

export async function POST(request) {
    try {
        const { name, email, message } = await request.json();

        if (!name || !email || !message) {
            return Response.json(
                { error: "Alle Felder sind erforderlich." },
                { status: 400 }
            );
        }

        if (!process.env.RESEND_API_KEY) {
            console.error("RESEND_API_KEY ist nicht gesetzt.");
            return Response.json(
                { error: "Nachricht konnte nicht gesendet werden." },
                { status: 500 }
            );
        }

        const resend = new Resend(process.env.RESEND_API_KEY);

        await resend.emails.send({
            from: "Kontaktformular <kontakt@playwithk.de>", // muss verifizierte Domain sein
            to: "info@playwithk.de",
            replyTo: email,
            subject: `Neue Nachricht von ${name}`,
            text: `Name: ${name}\nE-Mail: ${email}\n\n${message}`,
        });

        return Response.json({ success: true });
    } catch (error) {
        console.error("Contact form error:", error);
        return Response.json(
            { error: "Nachricht konnte nicht gesendet werden." },
            { status: 500 }
        );
    }
}