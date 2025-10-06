import { Component, inject, OnInit } from '@angular/core';
import { Navbar } from '../../shared/components/navbar/navbar';
import { Footer } from '../../shared/components/footer/footer';
import { RecipeCrud } from '../../core/services/recipeCRUD/recipe-crud';
import { ActivatedRoute } from '@angular/router';
import { Meal, MealResponse } from '../../core/models/meal.model';



@Component({
  selector: 'app-cooking-guide-details',
  imports: [ Navbar, Footer ],
  templateUrl: './cooking-guide-details.html',
  styleUrl: './cooking-guide-details.scss'
})
export class CookingGuideDetails implements OnInit {

  private recipeCRUD = inject( RecipeCrud )

  private activatedRoute = inject( ActivatedRoute )

  selectedRecipe: unknown = {}

  selectedRecipeID: string = ''



  ngOnInit(): void {
    this.selectedRecipeID = this.activatedRoute.snapshot.paramMap.get('searchRecipeID')!
    this.getSelectedRecipeDetails(this.selectedRecipeID)
  }


  getSelectedRecipeDetails( recipeID: string ) {
    this.recipeCRUD.getSelectedRecipeDetails( recipeID ).subscribe({
      next: ( recipeDetails => {
        if( Array.isArray( recipeDetails.meals )) {
          this.selectedRecipe = recipeDetails.meals[0]
          console.log( this.selectedRecipe)
        }
        else {
          this.selectedRecipe = {}
          console.log("sorry, we could not find any recipe matching your choice")
        }
      })
    })
  }

}
