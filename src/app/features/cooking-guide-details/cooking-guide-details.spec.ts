import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookingGuideDetails } from './cooking-guide-details';

describe('CookingGuideDetails', () => {
  let component: CookingGuideDetails;
  let fixture: ComponentFixture<CookingGuideDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CookingGuideDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CookingGuideDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
