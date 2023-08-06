import { InferModel } from 'drizzle-orm';
import {
  boolean,
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
  varchar,
} from 'drizzle-orm/pg-core';
import db from '.';

export const waitlistUsers = pgTable(
  'waitlist_users',
  {
    id: serial('id').primaryKey(),
    fullName: text('full_name'),
    email: varchar('email', { length: 256 }),
    approved: boolean('approved'),
    createdAt: timestamp('created_at').defaultNow(),
    updatedAt: timestamp('updated_at').defaultNow(),
    position: text('position'),
    fundType: text('fund_type'),
    coverageAreas: text('coverage_areas'),
  },
  (users) => ({
    emailIndex: uniqueIndex('email_index').on(users.email),
  })
);

export type WaitlistUser = InferModel<typeof waitlistUsers>;
export type NewWaitlistUser = InferModel<typeof waitlistUsers, 'insert'>;

export async function insertWaitlistUser(user: NewWaitlistUser) {
  return db.insert(waitlistUsers).values(user).returning();
}
