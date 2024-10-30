import { Component } from '@angular/core';
import { PrimeNgModule } from '../../../prime-ng/prime-ng.module';
import { ButtonModule } from 'primeng/button';
import { FilterFormComponent } from "../filter-form/filter-form.component";

@Component({
  selector: 'app-filter-content',
  standalone: true,
  imports: [PrimeNgModule, ButtonModule, FilterFormComponent],
  templateUrl: './filter-content.component.html',
  styleUrl: './filter-content.component.scss'
})
export class FilterContentComponent {

}
