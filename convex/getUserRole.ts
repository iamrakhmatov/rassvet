import { mutation } from './_generated/server';

export default mutation(async ({ db, auth }) => {
  const identity = await auth.getUserIdentity();
  if (!identity) {
    throw new Error('Called storeUser without authentication present');
  }

  // Check if we've already stored this identity before.
  const user = await db
    .query('users')
    .withIndex('by_token', (q) =>
      q.eq('tokenIdentifier', identity.tokenIdentifier)
    )
    .unique();
  if (user !== null) {
    return user.role;
  }
  return null;
});
