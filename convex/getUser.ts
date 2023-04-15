import { query } from './_generated/server';

export default query(async ({ db }, { userId }) => {
  const user = await db.get(userId);

  return user;
});
