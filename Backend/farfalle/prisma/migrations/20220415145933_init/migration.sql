/*
  Warnings:

  - You are about to drop the column `imageUR` on the `Play` table. All the data in the column will be lost.
  - Added the required column `imageURL` to the `Play` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Play" DROP COLUMN "imageUR",
ADD COLUMN     "imageURL" TEXT NOT NULL;
