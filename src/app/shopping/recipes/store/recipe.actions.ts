import { Action } from "@ngrx/store";
import { Recipe } from "../recipes.model";

export const SET_RECIPES = "[Recipes] Set Recipes";
export const FETCH_RECIPES = "[Recipes] fetchRecipes";
export const ADD_RECIPE = "[RECIPEs] Add Recipe";
export const UPDATE_RECIPE = "[RECIPEs] Update Recipe";
export const DELETE_RECIPE = "[RECIPEs] Delete Recipe";
export const STORE_RECIPE = "[RECIPEs] Store Recipe";

export class SetRecipes implements Action {
  readonly type = SET_RECIPES;
  constructor(public payload: Recipe[]) {}
}
export class FetchRecipes implements Action {
  readonly type = FETCH_RECIPES;
}
export class AddRecipes implements Action {
  readonly type = ADD_RECIPE;
  constructor(public payload: Recipe) {}
}
export class UpdateRecipes implements Action {
  readonly type = UPDATE_RECIPE;
  constructor(public payload: { index: number; newRecipe: Recipe }) {}
}
export class DeleteRecipes implements Action {
  readonly type = DELETE_RECIPE;
  constructor(public payload: number) {}
}
export class StoreRecipes implements Action {
  readonly type = STORE_RECIPE;
}

export type RecipesActions =
  | SetRecipes
  | FetchRecipes
  | AddRecipes
  | UpdateRecipes
  | DeleteRecipes
  | StoreRecipes;
