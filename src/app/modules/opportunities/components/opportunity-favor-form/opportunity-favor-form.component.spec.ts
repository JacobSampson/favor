import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunityFavorFormComponent } from './opportunity-favor-form.component';

describe('OpportunityFavorFormComponent', () => {
  let component: OpportunityFavorFormComponent;
  let fixture: ComponentFixture<OpportunityFavorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpportunityFavorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunityFavorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
