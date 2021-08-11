import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandombeerComponent } from './randombeer.component';

describe('RandombeerComponent', () => {
  let component: RandombeerComponent;
  let fixture: ComponentFixture<RandombeerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandombeerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandombeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
