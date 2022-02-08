import { Leaderboard } from './leaderboard'
import { Imdb } from './imdb'

export type Series = {
    seriesID: number;
    name: string;
    genre: string;
    imdbID: number;
    leaderboardID: number;
}
