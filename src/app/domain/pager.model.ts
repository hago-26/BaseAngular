export interface Pager<T> {
    currentPage: number;
    pageSize: number;
    totalCount: number;
    search: string;
    items: T[];
    totalPages: number;
    hasPrevious: boolean;
    hasNext: boolean;
}