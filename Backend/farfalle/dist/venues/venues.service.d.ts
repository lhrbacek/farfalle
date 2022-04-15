import { PrismaService } from '../prisma.service';
import { Venue, Prisma } from '@prisma/client';
export declare class VenuesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.VenueCreateInput): Promise<Venue>;
    findAll(): Promise<Venue[]>;
    findOne(venueWhereUniqueInput: Prisma.VenueWhereUniqueInput): Promise<Venue | null>;
    update(params: {
        where: Prisma.VenueWhereUniqueInput;
        data: Prisma.VenueUpdateInput;
    }): Promise<Venue>;
    delete(where: Prisma.VenueWhereUniqueInput): Promise<Venue>;
}
