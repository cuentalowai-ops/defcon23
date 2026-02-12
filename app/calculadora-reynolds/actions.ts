"use server";

import { z } from "zod";
import { calculateReScore, getRiskLevel } from "@/lib/reynolds";
import { Resend } from "resend";
import { Client as NotionClient } from "@notionhq/client";

const ReynoldsSchema = z.object({
  q1: z.enum(["A", "B", "C", "D"]),
  q2: z.enum(["A", "B", "C", "D"]),
  q3: z.enum(["A", "B", "C", "D"]),
  q4: z.enum(["A", "B", "C", "D"]),
  q5: z.enum(["A", "B", "C", "D"]),
  q6: z.enum(["A", "B", "C", "D"]),
  q7: z.enum(["A", "B", "C", "D"]),
  q8: z.enum(["A", "B", "C", "D"]),
  q9: z.enum(["A", "B", "C", "D"]),
  q10: z.enum(["A", "B", "C", "D"]),
  email: z.string().email().max(255),
  company: z.string().min(2).max(100),
  consent: z.literal("true"),
});

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const notion = process.env.NOTION_API_KEY
  ? new NotionClient({ auth: process.env.NOTION_API_KEY })
  : null;

export async function submitReynoldsCalculator(formData: FormData) {
  const raw = Object.fromEntries(formData.entries());
  const parsed = ReynoldsSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      error: "Invalid form data",
      details: parsed.error.flatten(),
    };
  }

  const { email, company, consent: _consent, ...answers } = parsed.data;
  const reScore = calculateReScore(answers);
  const riskLevel = getRiskLevel(reScore);

  try {
    // Guardar en Notion (si está configurado)
    if (notion && process.env.NOTION_DATABASE_ID) {
      try {
        await notion.pages.create({
          parent: { database_id: process.env.NOTION_DATABASE_ID },
          properties: {
            Email: { email },
            Empresa: { title: [{ text: { content: company } }] },
            "Re Score": { number: reScore },
            "Risk Level": { select: { name: riskLevel } },
            Fecha: { date: { start: new Date().toISOString() } },
          },
        });
      } catch (notionError) {
        console.error("Notion error (non-blocking):", notionError);
      }
    }

    // Enviar email (si está configurado)
    if (resend) {
      try {
        await resend.emails.send({
          from: "resultados@defcon23.eu",
          to: email,
          subject: `Tu Re Score: ${reScore} (${riskLevel.toUpperCase()})`,
          html: generateEmailTemplate(company, reScore, riskLevel),
        });
      } catch (emailError) {
        console.error("Email error (non-blocking):", emailError);
      }
    }

    // Generar ID único para el lead (sin BD)
    const leadId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    return { success: true, reScore, riskLevel, leadId };
  } catch (error) {
    console.error("Error submitting Reynolds calculator:", error);
    return { error: "Failed to process submission. Please try again." };
  }
}

function generateEmailTemplate(
  company: string,
  reScore: number,
  riskLevel: "laminar" | "transitional" | "turbulent"
): string {
  const riskData = {
    laminar: {
      title: "Flujo Laminar ✅",
      description:
        "Tu organización opera en régimen de flujo laminar. El sistema es predecible y eficiente.",
      color: "#4AABAB",
    },
    transitional: {
      title: "Flujo Transicional ⚠️",
      description:
        "Tu organización está en régimen de transición. Hay turbulencias detectables que pueden escalar.",
      color: "#FFD97A",
    },
    turbulent: {
      title: "Flujo Turbulento 🚨",
      description:
        "Tu organización opera en régimen turbulento. Alto riesgo de colapso operativo.",
      color: "#C06080",
    },
  };

  const risk = riskData[riskLevel];

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: 'Inter', sans-serif; background: #0a0a0a; color: #e5e5e5; margin: 0; padding: 40px; }
        .container { max-width: 600px; margin: 0 auto; background: #050505; border-radius: 16px; padding: 40px; border: 1px solid ${risk.color}40; }
        .header { text-align: center; margin-bottom: 32px; }
        .score { font-size: 64px; font-weight: 700; color: ${risk.color}; }
        .title { font-size: 24px; font-weight: 600; margin-top: 16px; }
        .description { font-size: 16px; line-height: 1.6; color: #a3a3a3; margin: 24px 0; }
        .cta { display: inline-block; background: linear-gradient(135deg, #FFB088, #FFD97A); color: #0a0a0a; padding: 16px 32px; border-radius: 8px; text-decoration: none; font-weight: 600; margin-top: 24px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="score">${reScore}</div>
          <div class="title">${risk.title}</div>
        </div>
        <div class="description">
          <p>Hola ${company},</p>
          <p>${risk.description}</p>
          <p>Tu Re Score de <strong>${reScore}</strong> indica que tu organización necesita atención en las siguientes áreas:</p>
          <ul>
            <li>Gestión de flujo de caja (días de cobro real)</li>
            <li>Dependencia de personas clave</li>
            <li>Resiliencia operativa ante crisis</li>
          </ul>
        </div>
        <center>
          <a href="https://cal.com/defcon23/auditoria" class="cta">Agenda Auditoría Gratuita</a>
        </center>
      </div>
    </body>
    </html>
  `;
}
