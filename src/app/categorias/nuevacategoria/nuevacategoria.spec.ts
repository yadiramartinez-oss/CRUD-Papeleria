import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nuevacategoria } from './nuevacategoria';

describe('Nuevacategoria', () => {
  let component: Nuevacategoria;
  let fixture: ComponentFixture<Nuevacategoria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nuevacategoria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nuevacategoria);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
