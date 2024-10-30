import { Component } from '@angular/core';
import { PrimeNgModule } from '../../../prime-ng/prime-ng.module';

@Component({
  selector: 'app-filter-form',
  standalone: true,
  imports: [PrimeNgModule],
  templateUrl: './filter-form.component.html',
  styleUrl: './filter-form.component.scss'
})
export class FilterFormComponent {

  paymentOptions = [
    { name: 'Option 1', value: 1 },
    { name: 'Option 2', value: 2 },
    { name: 'Option 3', value: 3 },


  ];

  public rangeValues: number[] = [20, 80];

  public valSelect1: number | undefined = undefined;
}
