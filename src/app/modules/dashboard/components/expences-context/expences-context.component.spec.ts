import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpencesContextComponent } from './expences-context.component';

describe('ExpencesContextComponent', () => {
  let component: ExpencesContextComponent;
  let fixture: ComponentFixture<ExpencesContextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpencesContextComponent]
    });
    fixture = TestBed.createComponent(ExpencesContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
