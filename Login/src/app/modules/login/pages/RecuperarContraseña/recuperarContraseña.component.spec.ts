import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { recuperarContraseñaComponent } from './recuperarContraseña.component';

describe('ForgotPasswordComponent', () => {
  let component: recuperarContraseñaComponent;
  let fixture: ComponentFixture<recuperarContraseñaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ recuperarContraseñaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(recuperarContraseñaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});