import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterGameComponent } from './monster-game.component';

describe('MonsterGameComponent', () => {
  let component: MonsterGameComponent;
  let fixture: ComponentFixture<MonsterGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonsterGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsterGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
