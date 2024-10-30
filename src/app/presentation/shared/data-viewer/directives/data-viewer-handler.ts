import { Observable, of } from "rxjs";
import { Columns, DataTable } from "./data-table";
import { Pager } from "../../../../domain/pager.model";


export abstract class DataViewerHandler{
    protected _dataTable : DataTable<any> = new DataTable<any>();
    protected _dataSource: any;


    public _getById : Function = () => { return of({});};
    public _getByPage : any;
    public _search : Function = () => {};


    public getByPage : Function = () => {};

    constructor() {
        
    }

    public search(query: string) {
        console.log('Buscar con: ', query);
    }

    public getById(id: number) {
        console.log('Buscar por id: ', id);
    }

    // Getters and Setters
    get dataTable(): DataTable<any> {
        return this._dataTable;
    }

    set dataCols(dataCols: Columns[]) {
        this._dataTable.columns = dataCols;
    }

    set dataSource(dataSource: any) {
        this._dataSource = dataSource;
    }
    
    public onPaginate(event: any) {
        this._dataTable._first = event.first;
        this.getByPage(event.page + 1);
    }

    // public getByPage(page: number = 1) {
    //     this._getByPage(page).subscribe((data: Pager<any>) => {
    //         debugger;
    //         this._dataTable.setData(data.items, data.totalCount, data.pageSize);
    //     });
    // }

    

}