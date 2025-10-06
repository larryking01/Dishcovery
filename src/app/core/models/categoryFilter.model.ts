export interface CategoryFilter {
    strMeal: string,
    strMealThumb: string,
    idMeal: string
}


export interface CategoryFilterResponse {
    meals: CategoryFilter[]
}