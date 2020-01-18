import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsoCardComponent } from './iso-card.component';

describe('IsoCardComponent', () => {
  let component: IsoCardComponent;
  let fixture: ComponentFixture<IsoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
