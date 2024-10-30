
export abstract class DataViewerConfig {
    private _dataSource: any;

    protected _getById : Function | undefined;
    protected _search : Function | undefined;

    constructor(source: any) {
        this._dataSource = source;
    }


    get search() {
        return this._search;
    }
}


export class ConfigTable extends DataViewerConfig {
    constructor(private source: any) {
        super(source);
    }

    override _search = (params : any) => {
        return this.source.getRegistrosEntradas(params.pageNumber);
    };

}