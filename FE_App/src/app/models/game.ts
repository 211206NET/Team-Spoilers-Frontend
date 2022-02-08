import { Series } from './series'
import { Player } from './player'

export type Game = {
    id: number;
    question: string;
    seriesID: number;
    playerID: number;
    hasWinnder: boolean;
}