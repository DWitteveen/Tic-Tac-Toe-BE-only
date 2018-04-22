import { JsonController, Get, Param, Post, Put, Body, NotFoundError, HttpCode } from 'routing-controllers'
import Game  from './entity'
import {color, defaultBoard, moves} from './gameEdit'
// import { Contains } from 'class-validator';
//imported Game class from entity.ts
//imported the color function and default board var.

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

    // Update entity  // updates the defaultBoard ...
    @Put('/game/:id')
    async updateGame(
    @Param('id') id: number,
    @Body() update: Partial<Game>
    ) {
        const game = await Game.findOne(id)
        if (!game) throw new NotFoundError('Cannot find game')

        // check if defaultBoard and update.board are not equal to 1 else throw in an error
        if (moves(game.board, update.board ) !== 1) 
        throw new NotFoundError('only one move p/p') 
        //not sure if this this is correct!!

        return Game.merge(game, update).save()
    }

    
    //Create new entity // assign random-color to a user when new game starts
    @Post('/game')
    @HttpCode(201)
        createGame(
    @Body() game: Game
    ) {
        if (game.color) //!== "red" || "blue" || "green" || "yellow" || "magenta"
        throw new NotFoundError('Not a valid color')
        //when tries to set color throw error 

        game.color = color()
        game.board = defaultBoard
        //set random color
        //default board is initiated,
        
        return game.save()
           
    }
    //game.colors = color()  ---> Math.random() from gameEdit
    // set game.board === defaultBoard
    
}   

//findOneById --> findOne
//findOne returns a Promise, 

//write a test about the expected returnd colors

// @Body() color: colorsList
// @Contains(colorList)

//async await pauses the exection of function game.findOne

//@Body inject request body
//@httpcode set custom  HTTP code
//@param defines parameters for an object element