import { query } from "core/db/query";

export const GET = async () => {
  const visits = await query({
    query: `SELECT COALESCE(SUM(amount), 0) as visits FROM visits`,
    values: [],
  });

  return Response.json(visits);
};

export const PUT = async (request: Request) => {
  const { url } = await request.json();

  await query({
    query: `INSERT INTO visits (url, amount) VALUES (?, 1)
            ON DUPLICATE KEY UPDATE amount = amount + 1 RETURNING amount;`,
    values: [url],
  });

  return Response.json({ url });
};