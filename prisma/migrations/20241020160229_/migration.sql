-- CreateTable
CREATE TABLE "txai_users" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "cpf" TEXT NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "nameUser" VARCHAR(50) NOT NULL,
    "administrator" BOOLEAN NOT NULL DEFAULT false,
    "photo" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "txai_users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "items" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "value" DECIMAL(65,30) NOT NULL,
    "amount" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "session" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "token" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "session_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "txai_users_email_key" ON "txai_users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "txai_users_cpf_key" ON "txai_users"("cpf");

-- AddForeignKey
ALTER TABLE "items" ADD CONSTRAINT "items_userId_fkey" FOREIGN KEY ("userId") REFERENCES "txai_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "session" ADD CONSTRAINT "session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "txai_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
