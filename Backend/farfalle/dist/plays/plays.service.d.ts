import { PrismaService } from '../prisma.service';
import { Play, Prisma } from '@prisma/client';
export declare class PlaysService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.PlayCreateInput): Promise<Play>;
    findAll(): Promise<Play[]>;
    findOne(playWhereUniqueInput: Prisma.PlayWhereUniqueInput): Promise<Play | null>;
    update(params: {
        where: Prisma.PlayWhereUniqueInput;
        data: Prisma.PlayUpdateInput;
    }): Promise<Play>;
    delete(where: Prisma.PlayWhereUniqueInput): Promise<Play>;
}
