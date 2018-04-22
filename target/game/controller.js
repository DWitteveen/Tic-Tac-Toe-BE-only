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
const routing_controllers_1 = require("routing-controllers");
const entity_1 = require("./entity");
const gameEdit_1 = require("./gameEdit");
let PageController = class PageController {
    getGame(id) {
        return entity_1.default.findOne(id);
    }
    async allGames() {
        const game = await entity_1.default.find();
        console.log(game);
        return { game };
    }
    async updateGame(id, update) {
        const game = await entity_1.default.findOne(id);
        if (!game)
            throw new routing_controllers_1.NotFoundError('Cannot find game');
        return entity_1.default.merge(game, update).save();
    }
    createGame(game) {
        game.color = gameEdit_1.color();
        game.board = gameEdit_1.defaultBoard;
        return game.save();
    }
};
__decorate([
    routing_controllers_1.Get('/game/:id'),
    __param(0, routing_controllers_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PageController.prototype, "getGame", null);
__decorate([
    routing_controllers_1.Get('/game'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PageController.prototype, "allGames", null);
__decorate([
    routing_controllers_1.Put('/game/:id'),
    __param(0, routing_controllers_1.Param('id')),
    __param(1, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], PageController.prototype, "updateGame", null);
__decorate([
    routing_controllers_1.Post('/game'),
    routing_controllers_1.HttpCode(201),
    __param(0, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [entity_1.default]),
    __metadata("design:returntype", void 0)
], PageController.prototype, "createGame", null);
PageController = __decorate([
    routing_controllers_1.JsonController()
], PageController);
exports.default = PageController;
//# sourceMappingURL=controller.js.map