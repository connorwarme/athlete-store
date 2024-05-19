"use server"
import 'dotenv/config';
import { sql } from '@vercel/postgres';

const users = [
  { name: 'John Doe', email: 'jd@mail.com'},
  { name: 'Jane Doe', email: 'jad@mail.com'},
  { name: 'James Doe', email: 'jdd@mail.com'},
]
async function seedUsers() {

  console.log(process.env.POSTGRES_URL)
  try {
    const getUsers = await sql`SELECT * FROM users;`;
    const createTable = await sql`
    CREATE TABLE people (
      id UUID DEFAULT gen_random_uuid(),
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL UNIQUE
    );`;
    console.log(getUsers);

    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const result = await sql`
        INSERT INTO people (name, email)
        VALUES (${user.name}, ${user.email})
        RETURNING *;`;
        return result;
      })
    );
    console.log(`Seeded ${insertedUsers.length} users`);
    return { createTable, insertedUsers };
  } catch (error) {
    console.error('Error seeding users:', error);
  }
}
export async function main() {
  await seedUsers()
}
main().catch((error) => {
  console.error('Error connecting to database:', error);
});