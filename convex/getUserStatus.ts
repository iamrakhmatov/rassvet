import { query } from './_generated/server';

export default query(async ({ db, auth }) => {
  const identity = await auth.getUserIdentity();

  if (!identity) {
    throw new Error('Called getUserStatus without authentication present');
  }

  // Check if we've already stored this identity before.
  const user = await db
    .query('users')
    .withIndex('by_token', (q) =>
      q.eq('tokenIdentifier', identity.tokenIdentifier)
    )
    .unique();

  return user?.status;
});
