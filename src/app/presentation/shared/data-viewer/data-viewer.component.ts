import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { GenericTableComponent } from './components/generic-table/generic-table.component';
import { FilterContentComponent } from './components/filter-content/filter-content.component';
import { PagerComponent } from "./components/pager/pager.component";
import { DataViewerStateService } from './services/data-viewer-state.service';
import { FilterSidebarComponent } from "./components/filter-sidebar/filter-sidebar.component";
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { FilterFormComponent } from './components/filter-form/filter-form.component';
import { RegistroEntradasUseCases } from '../../../domain/registro-entradas-usecases';
import { DataViewerHandler } from '../Directives/DataViewer/data-viewer-handler';
import { ExampleCols } from './example-data/example-cols';
import { ConfigTable } from '../Directives/DataViewer/data-viewer-config';

@Component({
  selector: 'app-data-viewer',
  standalone: true,
  imports: [CommonModule, PrimeNgModule,SearchBarComponent, GenericTableComponent, FilterContentComponent, PagerComponent, FilterSidebarComponent, FilterFormComponent],
  templateUrl: './data-viewer.component.html',
  styleUrl: './data-viewer.component.scss'
})
export class DataViewerComponent {

  showFilters: boolean = false; // Estado por defecto

  private _dataViewer: DataViewerHandler | undefined;



  constructor(private _dataViewerStateService : DataViewerStateService, private _registroEntradasUseCases : RegistroEntradasUseCases) {
    this.configDataViewer(_registroEntradasUseCases);
    this.subcribeStateService();
  }

  get DataViewer(): DataViewerHandler | undefined {
    return this._dataViewer;
  }

  ngOnInit(): void {
    // Nos suscribimos al observable del servicio para escuchar los cambios

  }

  isMobile(): boolean {
    return window.innerWidth <= 1200;
  }

  private subcribeStateService() {
    this._dataViewerStateService.filterVisible$.subscribe(visible => {
      this.showFilters = visible;  
    });
  }

  private configDataViewer(source: any) {
    this._dataViewer = new DataViewerHandler(new ConfigTable(source), ExampleCols);
    this._dataViewer.search({pageNumber: 1});
  }
 


}
