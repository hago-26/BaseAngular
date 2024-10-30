import { Component, Input, input } from '@angular/core';
import { PaginatorModule } from 'primeng/paginator';
import { DataTable } from '../../directives/data-table';
import { CommonModule } from '@angular/common';
import { RegistroEntradasUseCases } from '../../../../../domain/registro-entradas-usecases';
import { DataViewerHandler } from '../../../Directives/DataViewer/data-viewer-handler';

@Component({
  selector: 'app-pager',
  standalone: true,
  imports: [PaginatorModule, CommonModule],
  templateUrl: './pager.component.html',
  styleUrl: './pager.component.scss'
})
export class PagerComponent {

  @Input() dataViewerHandler: DataViewerHandler | undefined;

  

  onPageChange(event: any) {
    this.dataViewerHandler?.onPaginate(event);
  }

  get dataTable(){
    return this.dataViewerHandler?.dataTable;
  }

  
}
