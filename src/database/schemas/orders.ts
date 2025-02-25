/* eslint-disable sort-keys-fix/sort-keys-fix  */
import { boolean, jsonb, pgTable, text } from 'drizzle-orm/pg-core';

import { DEFAULT_PREFERENCE } from '@/const/user';

import { timestamps, timestamptz } from './_helpers';

export const orders = pgTable('orders', {
  id: text('id').primaryKey().notNull(),
  username: text('username').unique(),
  email: text('email'),

  avatar: text('avatar'),
  phone: text('phone'),
  firstName: text('first_name'),
  lastName: text('last_name'),
  fullName: text('full_name'),

  isOnboarded: boolean('is_onboarded').default(false),
  // Time user was created in Clerk
  clerkCreatedAt: timestamptz('clerk_created_at'),

  // Required by nextauth, all null allowed
  emailVerifiedAt: timestamptz('email_verified_at'),

  preference: jsonb('preference').$defaultFn(() => DEFAULT_PREFERENCE),

  ...timestamps,
});

export type NewOrder = typeof orders.$inferInsert;
export type OrderItem = typeof orders.$inferSelect;


