import { DataTable } from "./data-table-handler";
import { DataViewerConfig } from "./data-viewer-config";
import { Columns } from "./models/Columns";


export class DataViewerHandler {
    protected _dataTable : DataTable<any>;
    private _dataSource: DataViewerConfig;

    protected _getById : Function | undefined;
    protected _search : Function | undefined;

    constructor(config: DataViewerConfig, columns: Columns[]) {
        this._dataTable = new DataTable<any>();

        this._dataTable.columns = columns;
        this._dataSource = config;

    }


    public search(params : any) {
        debugger;
        if(!this._dataSource.search){
            console.error('No se ha definido la función de búsqueda');
            return;
        } 

        this._dataSource.search(params).subscribe((data: any) => {
            this._dataTable.setData(data.items, data.totalCount, data.pageSize);
        });
    }


    public onPaginate(event: any) {
        this._dataTable._first = event.first;
        this.search({pageNumber: event.page + 1});
    }

    get dataTable() {
        return this._dataTable;
    }

}