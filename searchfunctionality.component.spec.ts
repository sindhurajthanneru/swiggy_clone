import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchfunctionalityComponent } from './searchfunctionality.component';

describe('SearchfunctionalityComponent', () => {
  let component: SearchfunctionalityComponent;
  let fixture: ComponentFixture<SearchfunctionalityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchfunctionalityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchfunctionalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
