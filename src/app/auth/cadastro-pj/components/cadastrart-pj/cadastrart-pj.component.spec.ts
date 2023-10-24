import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrartPjComponent } from './cadastrart-pj.component';

describe('CadastrartPjComponent', () => {
  let component: CadastrartPjComponent;
  let fixture: ComponentFixture<CadastrartPjComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrartPjComponent]
    });
    fixture = TestBed.createComponent(CadastrartPjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
