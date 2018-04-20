import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GirlsViewComponent } from './girls-view.component';

describe('GirlsViewComponent', () => {
  let component: GirlsViewComponent;
  let fixture: ComponentFixture<GirlsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GirlsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GirlsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
