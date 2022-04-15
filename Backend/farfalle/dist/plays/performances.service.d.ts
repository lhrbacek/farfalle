import { PrismaService } from '../prisma.service';
import { Performance, Prisma } from '@prisma/client';
export declare class PerformancesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.PerformanceCreateInput): Promise<Performance>;
    findAll(): Promise<Performance[]>;
    findOne(perfWhereUniqueInput: Prisma.PerformanceWhereUniqueInput): Promise<Performance | null>;
    update(params: {
        where: Prisma.PerformanceWhereUniqueInput;
        data: Prisma.PerformanceUpdateInput;
    }): Promise<Performance>;
    delete(where: Prisma.PerformanceWhereUniqueInput): Promise<Performance>;
}
