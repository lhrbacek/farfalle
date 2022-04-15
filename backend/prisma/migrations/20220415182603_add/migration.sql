-- CreateTable
CREATE TABLE "Performance" (
    "id" SERIAL NOT NULL,
    "dateTime" TEXT NOT NULL,
    "playId" INTEGER NOT NULL,
    "venueId" INTEGER NOT NULL,

    CONSTRAINT "Performance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Venue" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "rows" INTEGER NOT NULL,
    "cols" INTEGER NOT NULL,

    CONSTRAINT "Venue_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Performance" ADD CONSTRAINT "Performance_playId_fkey" FOREIGN KEY ("playId") REFERENCES "Play"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Performance" ADD CONSTRAINT "Performance_venueId_fkey" FOREIGN KEY ("venueId") REFERENCES "Venue"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
