export interface AreaFilter {
    strMeal: string,
    strMealThumb: string,
    idMeal: string
}


export interface AreaFilterResponse {
    meals: AreaFilter[]
}