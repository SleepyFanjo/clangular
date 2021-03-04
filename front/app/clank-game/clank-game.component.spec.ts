import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClankGameComponent } from './clank-game.component';

describe('ClankGameComponent', () => {
  let component: ClankGameComponent;
  let fixture: ComponentFixture<ClankGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClankGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClankGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
