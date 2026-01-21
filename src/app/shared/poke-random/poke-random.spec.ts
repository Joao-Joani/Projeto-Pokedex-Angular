import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeRandom } from './poke-random';

describe('PokeRandom', () => {
  let component: PokeRandom;
  let fixture: ComponentFixture<PokeRandom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokeRandom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeRandom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
