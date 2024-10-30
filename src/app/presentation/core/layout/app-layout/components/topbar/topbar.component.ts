import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from '../../services/layout.service';
import { PrimeNgModule } from '../../../../../shared/prime-ng/prime-ng.module';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [PrimeNgModule],
  templateUrl: './topbar.component.html',
})
export class TopbarComponent {

  items!: MenuItem[];

  @ViewChild('menubutton') menuButton!: ElementRef;

  @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

  @ViewChild('topbarmenu') menu!: ElementRef;

  constructor(public layoutService: LayoutService) { }
}
