-- CreateEnum
CREATE TYPE "Status" AS ENUM ('SOLD', 'NOTSOLD');

-- CreateTable
CREATE TABLE "Ticket" (
    "id" SERIAL NOT NULL,
    "price" INTEGER NOT NULL,
    "row" INTEGER NOT NULL,
    "seat" INTEGER NOT NULL,
    "status" "Status" NOT NULL,

    CONSTRAINT "Ticket_pkey" PRIMARY KEY ("id")
);
