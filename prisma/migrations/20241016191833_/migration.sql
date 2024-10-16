/*
  Warnings:

  - Changed the type of `cpf` on the `txai_users` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "txai_users" DROP COLUMN "cpf",
ADD COLUMN     "cpf" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "txai_users_cpf_key" ON "txai_users"("cpf");
