import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeSearchResults } from './recipe-search-results';

describe('RecipeSearchResults', () => {
  let component: RecipeSearchResults;
  let fixture: ComponentFixture<RecipeSearchResults>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeSearchResults]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeSearchResults);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
