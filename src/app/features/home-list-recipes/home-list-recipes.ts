import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Navbar } from '../../shared/components/navbar/navbar';
import { Footer } from '../../shared/components/footer/footer';
import { RecipeCrud } from '../../core/services/recipeCRUD/recipe-crud';
import { Meal } from '../../core/models/meal.model';
import { EmptyState } from '../../shared/components/empty-state/empty-state';


@Component({
  selector: 'app-home-list-recipes',
  imports: [Navbar, Footer, EmptyState, CommonModule],
  templateUrl: './home-list-recipes.html',
  styleUrl: './home-list-recipes.scss'
})
export class HomeListRecipes implements OnInit {

  private recipeCRUDService = inject( RecipeCrud )
  
  private router = inject( Router )

  MealArray: Meal[] = []



  ngOnInit(): void {
    this.fetchAllRecipesStartingWithLetter('h')
  }


  fetchAllRecipesStartingWithLetter(recipeStartingLetter: string) {
    this.recipeCRUDService.getAllRecipes(recipeStartingLetter).subscribe({
      next: ( recipeList => {
       this.MealArray = recipeList.meals ?? []
       console.log("meal array = ", this.MealArray)
      }),
      error: ( err => {
        console.log( err )
      })
    })
  }


  navigateToSelectedRecipeDetails(recipeID: string) {
    this.router.navigate(['cooking-guide-details', recipeID])
  }




}
