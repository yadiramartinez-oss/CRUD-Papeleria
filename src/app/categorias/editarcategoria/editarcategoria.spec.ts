import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Editarcategoria } from './editarcategoria';

describe('Editarcategoria', () => {
  let component: Editarcategoria;
  let fixture: ComponentFixture<Editarcategoria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Editarcategoria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Editarcategoria);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
