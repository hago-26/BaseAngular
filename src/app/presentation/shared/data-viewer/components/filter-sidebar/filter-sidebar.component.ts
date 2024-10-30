import { Component } from '@angular/core';
import { PrimeNgModule } from '../../../prime-ng/prime-ng.module';
import { FilterFormComponent } from '../filter-form/filter-form.component';
import { DataViewerStateService } from '../../services/data-viewer-state.service';
import { LayoutService } from '../../../../core/layout/app-layout/services/layout.service';

@Component({
  selector: 'app-filter-sidebar',
  standalone: true,
  imports: [PrimeNgModule, FilterFormComponent],
  templateUrl: './filter-sidebar.component.html',
  styleUrl: './filter-sidebar.component.scss'
})
export class FilterSidebarComponent {

  public sidebarVisible : boolean = false;


  constructor(private dataViewerStateService : DataViewerStateService, private _layoutService: LayoutService) {
    this.dataViewerStateService.filterVisible$.subscribe((visible) => {
      this.sidebarVisible = visible;
    });

  }

  closeSidebar() {
    this.dataViewerStateService.toggleFilters();
  }


}
