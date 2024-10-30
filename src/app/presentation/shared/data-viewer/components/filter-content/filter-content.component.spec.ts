import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterContentComponent } from './filter-content.component';

describe('FilterContentComponent', () => {
  let component: FilterContentComponent;
  let fixture: ComponentFixture<FilterContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
