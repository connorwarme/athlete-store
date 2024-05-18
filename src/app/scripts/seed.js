import { db } from '@vercel/postgres';

const users = [
  { name: 'John Doe', email: 'jd@mail.com'},
  { name: 'Jane Doe', email: 'jad@mail.com'},
  { name: 'James Doe', email: 'jdd@mail.com'},
]
async function seedUsers(client) {
  try {
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
    );`;
    console.log('create user table');

    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const result = await client.sql`
        INSERT INTO users (name, email)
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
  const client = await db.connect();
  await seedUsers(client)
  await client.end();
}
main().catch((error) => {
  console.error('Error connecting to database:', error);
});