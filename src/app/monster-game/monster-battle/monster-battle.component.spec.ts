import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterBattleComponent } from './monster-battle.component';

describe('MonsterBattleComponent', () => {
  let component: MonsterBattleComponent;
  let fixture: ComponentFixture<MonsterBattleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonsterBattleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsterBattleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
