import { query } from "./_generated/server";

export default query(async ({ db, auth }) => {
  try {
    const identity = await auth.getUserIdentity();

    if (!identity) {
      throw new Error("Called getUserStatus without authentication present");
    }

    // Check if we've already stored this identity before.
    const user = await db
      .query("users")
      .withIndex("by_token", (q) =>
        q.eq("tokenIdentifier", identity.tokenIdentifier)
      )
      .unique();

    return user;
  } catch (e) {
    // This should be logged to datadog/convex
    if (e instanceof Error) console.log(e.message);
    return undefined;
  }
});
