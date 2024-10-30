import { DataViewerConfig } from "../../Directives/DataViewer/data-viewer-config";

export class DataExampleConfig extends DataViewerConfig {

    constructor(private source: any) {
        super(source);
        
        this._search = (params : any) => {
            return this.source.getRegistrosEntradas(params.pageNumber);
        };

    }

}