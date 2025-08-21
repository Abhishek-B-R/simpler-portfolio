import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(`https://eu.posthog.com/api/projects/${process.env.POSTHOG_PROJECT_ID}/insights`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.POSTHOG_PERSONAL_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      filter: {
        events: [{ id: "$pageview", type: "events", order: 0 }],
        date_from: "-30d",
      },
    }),
  });

  const data = await res.json();
  const count = data.result?.[0]?.count ?? 0;

  return NextResponse.json({ count });
}
