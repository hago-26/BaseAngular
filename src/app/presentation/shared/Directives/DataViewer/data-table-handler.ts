import { Columns } from "./models/Columns";

export class DataTable<T> {

    // DATA TABLE
    private _data: T[] = [];
    private _columns: Columns[] = [];

    // PAGER
    public _totalItems: number = 0;
    public _rows: number = 10;
    public _first: number = 0;
    
    get data(): T[] {
        return this._data;
    }
    
    get columns(): Columns[] {
        return this._columns;
    }
    

    public setData(data: T[], totalItems: number, pageSize:number|null = null) {
        debugger
        this._data = data;
        this._totalItems = totalItems;
        this._rows = pageSize ? pageSize : this._rows;

    }

    set columns(columns: Columns[]) {
        this._columns = columns;
    }
}