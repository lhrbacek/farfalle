import { PrismaClient } from '@prisma/client';
import { addresses } from './seeds/addresses';
import { orders } from './seeds/orders';
import { performances } from './seeds/performances';
import { plays } from './seeds/plays';
import { tickets } from './seeds/tickets';
import { users } from './seeds/users';
import { venues } from './seeds/venues';

const prisma = new PrismaClient();

async function main() {
  await prisma.play.createMany({
    data: plays,
  });

  await prisma.address.createMany({
    data: addresses,
  });

  await prisma.user.createMany({
    data: users,
  });

  await prisma.order.createMany({
    data: orders,
  });

  await prisma.venue.createMany({
    data: venues,
  });

  await prisma.performance.createMany({
    data: performances,
  });

  await prisma.ticket.createMany({
    data: tickets,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
