import { defineSchema, defineTable } from "convex/schema";
import { v, Infer } from "convex/values";

const userStatuses = v.union(
  v.literal("salesman"),
  v.literal("cashier"),
  v.literal("admin")
);
export type UserStatus = Infer<typeof userStatuses>;

export default defineSchema({
  users: defineTable({
    first_name: v.string(),
    last_name: v.string(),
    email: v.string(),
    phone_number: v.optional(v.string()),
    status: v.optional(userStatuses),
    tokenIdentifier: v.string(),
  }).index("by_token", ["tokenIdentifier"]),
  products: defineTable({
    name: v.string(),
    booked: v.number(),
    in_stock: v.number(),
  }),
});
