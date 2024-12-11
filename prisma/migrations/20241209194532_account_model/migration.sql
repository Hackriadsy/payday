/*
  Warnings:

  - You are about to drop the column `access_token` on the `accounts` table. All the data in the column will be lost.
  - You are about to drop the column `expires_at` on the `accounts` table. All the data in the column will be lost.
  - You are about to drop the column `refresh_token` on the `accounts` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "accounts_phone_country_key";

-- AlterTable
ALTER TABLE "accounts" DROP COLUMN "access_token",
DROP COLUMN "expires_at",
DROP COLUMN "refresh_token",
ALTER COLUMN "type" DROP NOT NULL,
ALTER COLUMN "name" DROP NOT NULL;
