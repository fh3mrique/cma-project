import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoreographyComponent } from './choreography.component';

describe('ChoreographyComponent', () => {
  let component: ChoreographyComponent;
  let fixture: ComponentFixture<ChoreographyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChoreographyComponent]
    });
    fixture = TestBed.createComponent(ChoreographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
