import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdepsComponent } from './viewdeps.component';

describe('ViewdepsComponent', () => {
  let component: ViewdepsComponent;
  let fixture: ComponentFixture<ViewdepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewdepsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
