-- CreateTable
CREATE TABLE "Play" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageUR" TEXT NOT NULL,
    "lengthMinutes" INTEGER NOT NULL,
    "director" TEXT NOT NULL,

    CONSTRAINT "Play_pkey" PRIMARY KEY ("id")
);
