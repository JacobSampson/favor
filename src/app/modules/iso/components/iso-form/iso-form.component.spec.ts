import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsoFormComponent } from './iso-form.component';

describe('IsoFormComponent', () => {
  let component: IsoFormComponent;
  let fixture: ComponentFixture<IsoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
