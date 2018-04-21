import { JsonController, Get, Param } from 'routing-controllers'
import Game  from './entity'

@JsonController()
export default class PageController {

    @Get('/games/:id')
    getGame(
        @Param('id') id: number
    ): Game {
        return Game.findOne[id]
    }
}