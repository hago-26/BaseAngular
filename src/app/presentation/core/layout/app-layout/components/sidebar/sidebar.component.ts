import { Component, ElementRef } from '@angular/core';
import { PrimeNgModule } from '../../../../../shared/prime-ng/prime-ng.module';
import { LayoutService } from '../../services/layout.service';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [PrimeNgModule, MenuComponent],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  constructor(public layoutService: LayoutService, public el: ElementRef) { }
}

