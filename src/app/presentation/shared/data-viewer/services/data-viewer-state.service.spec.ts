import { TestBed } from '@angular/core/testing';

import { DataViewerStateService } from './data-viewer-state.service';

describe('DataViewerStateService', () => {
  let service: DataViewerStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataViewerStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
