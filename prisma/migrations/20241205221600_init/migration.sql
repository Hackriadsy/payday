-- CreateTable
CREATE TABLE "accounts" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL DEFAULT 'individual',
    "google_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "avatar" TEXT,
    "country" TEXT DEFAULT 'NG',
    "phone" TEXT,
    "access_token" TEXT,
    "refresh_token" TEXT,
    "expires_at" TIMESTAMP(3),

    CONSTRAINT "accounts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "accounts_google_id_key" ON "accounts"("google_id");

-- CreateIndex
CREATE INDEX "accounts_google_id_idx" ON "accounts"("google_id");

-- CreateIndex
CREATE UNIQUE INDEX "accounts_phone_country_key" ON "accounts"("phone", "country");
