import { db } from "@vercel/postgres";
import { NextResponse } from "next/server";


export async function GET() {
  try {
  const client = await db.connect();
  const result = await client.sql`CREATE TABLE IF NOT EXISTS users (
    name VARCHAR(255),
    email VARCHAR(255));`;
  return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}