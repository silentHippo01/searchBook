import { IBook } from '../../../../types/types';

export interface itemsSchema {
    kind: string,
    id: string,
    etag: string,
    selfLink: string,
}

export interface bookDataSchema {
    items: IBook[],
    totalItems: number,
    isLoading: boolean,
}