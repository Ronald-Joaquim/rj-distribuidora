export type Beer = {
    id: number;
    title: string;
    count: number;
    image: string;
    description: string;
}

export type BeerPage = {
    content: Beer[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}

