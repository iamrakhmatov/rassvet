import { Infer, defineSchema, defineTable, s } from 'convex/schema';

const userStatuses = s.union(
  s.literal('salesman'),
  s.literal('cashier'),
  s.literal('admin')
);
export type UserStatus = Infer<typeof userStatuses>;

export default defineSchema({
  users: defineTable({
    first_name: s.string(),
    last_name: s.string(),
    email: s.string(),
    phone_number: s.optional(s.string()),
    status: s.optional(userStatuses),
    tokenIdentifier: s.string(),
  }).index('by_token', ['tokenIdentifier']),
  products: defineTable({
    name: s.string(),
    booked: s.number(),
    in_stock: s.number(),
  }),
});
