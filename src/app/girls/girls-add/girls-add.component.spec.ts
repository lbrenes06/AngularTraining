import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GirlsAddComponent } from './girls-add.component';

describe('GirlsAddComponent', () => {
  let component: GirlsAddComponent;
  let fixture: ComponentFixture<GirlsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GirlsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GirlsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
