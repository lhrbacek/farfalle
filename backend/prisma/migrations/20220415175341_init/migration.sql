/*
  Warnings:

  - Added the required column `lengthMinutes` to the `Play` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Play" ADD COLUMN     "lengthMinutes" INTEGER NOT NULL;
