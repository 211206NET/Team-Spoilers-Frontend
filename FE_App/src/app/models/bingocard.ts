import { Answer } from './answer'
import { Game } from './game'
import { User } from './user'

export type BingoCard = {
    id: number;
    seriesID: number;
    userID: number;
    gameID: number;
    Answer: [];
}
