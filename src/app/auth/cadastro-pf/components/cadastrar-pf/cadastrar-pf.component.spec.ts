import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarPfComponent } from './cadastrar-pf.component';

describe('CadastrarPfComponent', () => {
  let component: CadastrarPfComponent;
  let fixture: ComponentFixture<CadastrarPfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarPfComponent]
    });
    fixture = TestBed.createComponent(CadastrarPfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
