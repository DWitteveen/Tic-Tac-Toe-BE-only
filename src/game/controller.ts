import { JsonController, Get, Param, Post, Put, Body, NotFoundError, HttpCode } from 'routing-controllers'
import Game  from './entity'

const defaultBoard = [
	['o', 'o', 'o'],
	['o', 'o', 'o'],
	['o', 'o', 'o']
]

const colors = ["red", "blue", "green", "yellow", "magenta"]


@JsonController()
export default class PageController {

    //Retrieve information in this case by id
    @Get('/game/:id')
    getGame(
        @Param('id') id: number
    ) {
        return Game.findOne(id)
    }

    //Retrieve info
    @Get('/game')
    async allGames() {
        const game = await Game.find()
        console.log(game)
        return { game }
    }

    //create new entity // trying to provide random-color when new game starts 
    @Put('/game/:id')
    async updateGame(
    @Param('id') id: number,
    @Body() update: Partial<Game>
    ) {
        const game = await Game.findOne(id)
        if (!game) throw new NotFoundError('Cannot find game')
        
        //game.colors  --> name: new name

        return Game.merge(game, update).save()
    }

    //do something with the provided entity
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

//write a test about the expected returnd colors