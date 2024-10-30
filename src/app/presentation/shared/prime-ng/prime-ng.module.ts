import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RippleModule } from 'primeng/ripple';
import { InputSwitchModule } from 'primeng/inputswitch';
import { SidebarModule } from 'primeng/sidebar';
import { BadgeModule } from 'primeng/badge';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabelModule } from "primeng/floatlabel"
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { SliderModule } from 'primeng/slider';
import { CalendarModule } from 'primeng/calendar';



@NgModule({
  declarations: [],
  imports: [
  ],
  exports: [
    CommonModule, PasswordModule, CheckboxModule, RouterModule, FormsModule, ButtonModule, InputTextModule, SidebarModule, BadgeModule, InputSwitchModule, RippleModule, DropdownModule, FloatLabelModule,
    ToolbarModule, SplitButtonModule, FormsModule, ReactiveFormsModule, RadioButtonModule, TableModule, TagModule, RatingModule, SelectButtonModule, InputNumberModule, SliderModule, CalendarModule
  ]
})
export class PrimeNgModule { }
