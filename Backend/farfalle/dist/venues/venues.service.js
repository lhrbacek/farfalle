"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VenuesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let VenuesService = class VenuesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        return this.prisma.venue.create({
            data
        });
    }
    async findAll() {
        return this.prisma.venue.findMany({});
    }
    async findOne(venueWhereUniqueInput) {
        return this.prisma.venue.findUnique({ where: venueWhereUniqueInput, });
    }
    async update(params) {
        const { where, data } = params;
        return this.prisma.venue.update({
            data,
            where,
        });
    }
    async delete(where) {
        return this.prisma.venue.delete({
            where,
        });
    }
};
VenuesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], VenuesService);
exports.VenuesService = VenuesService;
//# sourceMappingURL=venues.service.js.map