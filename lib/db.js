import mysql from 'serverless-mysql';

const db = mysql({
  config: {
    host: "localhost",
    database: "rdl-blog",
    user: "root",
    password: "Rohan9933@"
  }
});

export default async function excuteQuery({ query, values }) {
  try {
    const results = await db.query(query, values);
    await db.end();
    return results;
  } catch (error) {
    return { error };
  }
}