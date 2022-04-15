import { Prisma, PrismaClient } from '@prisma/client';
import { addresses } from './seeds/addresses';
import { users } from './seeds/users';

const prisma = new PrismaClient();

async function main() {
    await prisma.address.createMany({
        data: addresses,
    })
    
    await prisma.user.createMany({
        data: users,
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