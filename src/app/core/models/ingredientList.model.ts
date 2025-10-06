export interface IngredientList {
    idIngredient: string,
    strIngredient: string,
    strDescription: string,
    strType: string | null
}



export interface IngredientListResponse {
    meals: IngredientList[]
}