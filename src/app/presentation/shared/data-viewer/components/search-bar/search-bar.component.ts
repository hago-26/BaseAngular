import { Component, Input, input } from '@angular/core';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { DataViewerStateService } from '../../services/data-viewer-state.service';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [InputGroupModule,
            InputGroupAddonModule,
            InputTextModule,
          ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {

  constructor(private _dataViewerStateService : DataViewerStateService) { }

    // Método para alternar los filtros
    toggleFilters() {
      this._dataViewerStateService.toggleFilters();
    }

}
