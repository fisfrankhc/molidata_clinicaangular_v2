import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedoresEditarComponent } from './proveedores-editar.component';

describe('ProveedoresEditarComponent', () => {
  let component: ProveedoresEditarComponent;
  let fixture: ComponentFixture<ProveedoresEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProveedoresEditarComponent]
    });
    fixture = TestBed.createComponent(ProveedoresEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
