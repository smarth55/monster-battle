import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterPlayerComponent } from './monster-player.component';

describe('MonsterPlayerComponent', () => {
  let component: MonsterPlayerComponent;
  let fixture: ComponentFixture<MonsterPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonsterPlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsterPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
