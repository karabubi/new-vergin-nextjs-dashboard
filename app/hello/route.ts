import { customers } from "../lib/placeholder-data";

export async function GET() {
  try {
    return Response.json({ customers });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
