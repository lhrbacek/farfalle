"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaysModule = void 0;
const common_1 = require("@nestjs/common");
const plays_service_1 = require("./plays.service");
const plays_controller_1 = require("./plays.controller");
const prisma_service_1 = require("../prisma.service");
const performances_service_1 = require("../performances/performances.service");
const venues_service_1 = require("../venues/venues.service");
let PlaysModule = class PlaysModule {
};
PlaysModule = __decorate([
    (0, common_1.Module)({
        controllers: [plays_controller_1.PlaysController],
        providers: [plays_service_1.PlaysService, prisma_service_1.PrismaService, performances_service_1.PerformancesService, venues_service_1.VenuesService]
    })
], PlaysModule);
exports.PlaysModule = PlaysModule;
//# sourceMappingURL=plays.module.js.map