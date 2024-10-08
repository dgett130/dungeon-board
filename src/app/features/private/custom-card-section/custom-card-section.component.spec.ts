import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCardSectionComponent } from './custom-card-section.component';

describe('CustomCardSectionComponent', () => {
  let component: CustomCardSectionComponent;
  let fixture: ComponentFixture<CustomCardSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomCardSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomCardSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
