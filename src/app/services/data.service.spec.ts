import { TestBed, inject } from '@angular/core/testing';

import { DataService } from './data.service';
import { HttpModule } from '@angular/http';
import { FakeDataService } from './data.fake.service';


describe('DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpModule
      ],
      providers: [{provide:DataService, useClass:FakeDataService}]
    });
  });

  it('should be created', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
  }));
});
