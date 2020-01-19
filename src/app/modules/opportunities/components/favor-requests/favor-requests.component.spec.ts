import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavorRequestsComponent } from './favor-requests.component';

describe('FavorRequestsComponent', () => {
  let component: FavorRequestsComponent;
  let fixture: ComponentFixture<FavorRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavorRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavorRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
