import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { MealResponse } from '../../models/meal.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeCrud {
  private httpClient = inject( HttpClient )


  getAllRecipes(letter: string): Observable<MealResponse> {
    return this.httpClient.get<MealResponse>(`${ environment.meal_db_url }/search.php?f=${ letter }`)
  }

  
  getSelectedRecipeDetails(recipeID: string): Observable<MealResponse> {
    return this.httpClient.get<MealResponse>(`${ environment.meal_db_url }//lookup.php?i=${ recipeID }`)
  }
  
  









}
