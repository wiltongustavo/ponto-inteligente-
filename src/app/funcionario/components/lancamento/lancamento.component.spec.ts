import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LancamentoComponent } from './lancamento.component';

describe('LancamentoComponent', () => {
  let component: LancamentoComponent;
  let fixture: ComponentFixture<LancamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LancamentoComponent]
    });
    fixture = TestBed.createComponent(LancamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
