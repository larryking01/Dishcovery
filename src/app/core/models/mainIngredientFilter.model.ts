export interface MainIngredientFilter {
    strMeal: string,
    strMealThumb: string,
    idMeal: string
}


export interface MainIngredientFilterResponse {
    meals: MainIngredientFilter[]
}