// app/api/deployment-status/route.ts

export async function GET() {
  return Response.json({ status: "Deployment in progress" });
}
