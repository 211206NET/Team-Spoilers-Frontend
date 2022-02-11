export type Answer = {
    id: number;
    bingoCardID: number;
    block: string;
    isMarked: boolean;
}

export type Table = Array<Array<Answer|null>>;