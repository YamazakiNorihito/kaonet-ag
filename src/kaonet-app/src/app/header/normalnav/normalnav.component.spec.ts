import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalnavComponent } from './normalnav.component';

describe('NormalnavComponent', () => {
  let component: NormalnavComponent;
  let fixture: ComponentFixture<NormalnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NormalnavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
