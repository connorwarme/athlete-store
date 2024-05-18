import { db } from "@vercel/postgres";
import { NextResponse } from "next/server";

// const users = [
//   { name: 'John Doe', email: 'jd@mail.com'},
//   { name: 'Jane Doe', email: 'jad@mail.com'},
//   { name: 'James Doe', email: 'jdd@mail.com'},
// ]
// export async function GET() {
//   try {
//     const client = await db.connect();
//     const insertedUsers = await Promise.all(
//       users.map(async (user) => {
//         const result = await client.sql`
//         INSERT INTO users (name, email)
//         VALUES (${user.name}, ${user.email})
//         RETURNING *;`;
//         return result;
//       })
//     );
//     return NextResponse.json({ insertedUsers }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ error }, { status: 500 });
//   }
// }
export async function GET() {
  try {
    const client = await db.connect();
    const removal = client.sql`
    DELETE FROM users;
    `;
    return NextResponse.json({ removal }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}