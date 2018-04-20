import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensAddComponent } from './mens-add.component';

describe('MensAddComponent', () => {
  let component: MensAddComponent;
  let fixture: ComponentFixture<MensAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
