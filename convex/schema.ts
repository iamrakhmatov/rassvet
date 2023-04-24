import { defineSchema, defineTable } from "convex/schema";
import { v, Infer } from "convex/values";

const userRoles = v.union(
  v.literal("salesman"),
  v.literal("cashier"),
  v.literal("admin")
);
export type UserRole = Infer<typeof userRoles>;

export default defineSchema({
  users: defineTable({
    first_name: v.string(),
    last_name: v.string(),
    email: v.string(),
    phone_number: v.optional(v.string()),
    role: v.optional(userRoles),
    tokenIdentifier: v.string(),
  }).index("by_token", ["tokenIdentifier"]),
  products: defineTable({
    name: v.string(),
    order: v.number(),
    booked: v.number(),
    in_stock: v.number(),
    total: v.number(),
    price: v.number(),
    unit: v.union(
      v.literal("kg"),
      v.literal("m"),
      v.literal("l"),
      v.literal("pcs")
    ),
  }),
});
