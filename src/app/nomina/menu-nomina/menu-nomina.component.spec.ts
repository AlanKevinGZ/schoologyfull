import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuNominaComponent } from './menu-nomina.component';

describe('MenuNominaComponent', () => {
  let component: MenuNominaComponent;
  let fixture: ComponentFixture<MenuNominaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuNominaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuNominaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
