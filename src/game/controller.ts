import { JsonController, Get, Param, Post, Put, Body, NotFoundError, HttpCode } from 'routing-controllers'
import Game  from './entity'

const defaultBoard = [
	['o', 'o', 'o'],
	['o', 'o', 'o'],
	['o', 'o', 'o']
]

@JsonController()
export default class PageController {

    @Get('/game/:id')
    getGame(
        @Param('id') id: number
    ) {
        return Game.findOne[id]
    }

    @Get('/game')
    allGames() {
        const game = Game.find()
        return { Game }
    }

    @Put('/game/:id')
    async updatePage(
    @Param('id') id: number,
    @Body() update: Partial<Game>
    ) {
        const game = await Game.findOne(id)
        if (!game) throw new NotFoundError('Cannot find game')

        return Game.merge(game, update).save()
    }

    @Post('/game')
    @HttpCode(201)
        createGame(
    @Body() game: Game
    ) {
        return game.save()
    }

}

//findOneById --> findOne
//findOne returns a Promise, but routing-controllers will take care of that