import { defineSchema, defineTable, s } from 'convex/schema';

export default defineSchema({
  users: defineTable({
    first_name: s.string(),
    last_name: s.string(),
    email: s.string(),
    phone_number: s.optional(s.string()),
    role: s.optional(s.string()),
    tokenIdentifier: s.string(),
  }).index('by_token', ['tokenIdentifier']),
  products: defineTable({
    name: s.string(),
    booked: s.number(),
    in_stock: s.number(),
  }),
});
