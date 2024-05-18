import { sql } from "@vercel/postgres"; 
import { NextResponse } from "next/server";

// export async function GET(request) {
//   try {
//     const result = await sql`CREATE TABLE IF NOT EXISTS pets (
//       name VARCHAR(255),
//       owner VARCHAR(255));`;
//     return NextResponse.json({ result }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ error }, { status: 500 });
//   }
// }
export async function GET() {
  try {
    const removal = sql`
    DROP TABLE pets;
    `;
    return NextResponse.json({ removal }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}