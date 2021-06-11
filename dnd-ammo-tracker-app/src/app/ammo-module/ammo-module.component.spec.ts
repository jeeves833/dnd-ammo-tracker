import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmmoModuleComponent } from './ammo-module.component';

describe('AmmoModuleComponent', () => {
  let component: AmmoModuleComponent;
  let fixture: ComponentFixture<AmmoModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmmoModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmmoModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
