import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeListRecipes } from './home-list-recipes';

describe('HomeListRecipes', () => {
  let component: HomeListRecipes;
  let fixture: ComponentFixture<HomeListRecipes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeListRecipes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeListRecipes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
