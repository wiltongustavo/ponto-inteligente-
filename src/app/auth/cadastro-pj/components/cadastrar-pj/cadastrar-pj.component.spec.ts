import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarPjComponent } from './cadastrar-pj.component';

describe('CadastrartPjComponent', () => {
  let component: CadastrarPjComponent;
  let fixture: ComponentFixture<CadastrarPjComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarPjComponent]
    });
    fixture = TestBed.createComponent(CadastrarPjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
