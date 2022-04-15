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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaysController = void 0;
const common_1 = require("@nestjs/common");
const plays_service_1 = require("./plays.service");
const performances_service_1 = require("../performances/performances.service");
let PlaysController = class PlaysController {
    constructor(playsService, performancesService) {
        this.playsService = playsService;
        this.performancesService = performancesService;
    }
    async createPlay(playData) {
        return this.playsService.create(playData);
    }
    findAllPlays() {
        return this.playsService.findAll();
    }
    findOnePlay(id) {
        return this.playsService.findOne({ id: Number(id) });
    }
    removePlay(id) {
        return this.playsService.delete({ id: Number(id) });
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PlaysController.prototype, "createPlay", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PlaysController.prototype, "findAllPlays", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PlaysController.prototype, "findOnePlay", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PlaysController.prototype, "removePlay", null);
PlaysController = __decorate([
    (0, common_1.Controller)('plays'),
    __metadata("design:paramtypes", [plays_service_1.PlaysService,
        performances_service_1.PerformancesService])
], PlaysController);
exports.PlaysController = PlaysController;
//# sourceMappingURL=plays.controller.js.map