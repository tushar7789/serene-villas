// app/api/auth/error/route.ts
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const error = url.searchParams.get("error");
  
  return new Response(
    `<pre>Auth Error: ${error}</pre>`,
    { status: 400, headers: { "Content-Type": "text/html" } }
  );
}
