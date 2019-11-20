import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Store } from "@ngrx/store";
import * as RecipesActions from "./recipe.actions";
import { switchMap, map, withLatestFrom } from "rxjs/operators";
import { Recipe } from "../recipes.model";
import * as fromApp from "../../../store/app.reducer";

@Injectable()
export class RecipeEffects {
  @Effect()
  fetchRecipes = this.actions$.pipe(
    ofType(RecipesActions.FETCH_RECIPES),
    switchMap(([actionData, recipesState]) => {
      return this.http.get<Recipe[]>(
        "https://course-recipe-book-50ace.firebaseio.com/recipes.json"
      );
    }),
    map(recipes => {
      return recipes.map(recipe => {
        return {
          ...recipe,
          ingredients: recipe.ingredients ? recipe.ingredients : []
        };
      });
    }),
    map(recipes => {
      return new RecipesActions.SetRecipes(recipes);
    })
  );

  @Effect({dispatch:false})
  storeRecipes = this.actions$.pipe(
    ofType(RecipesActions.STORE_RECIPE),
    withLatestFrom(this.store.select("recipes")),
    switchMap(() => {
      return this.http.put(
        "https://course-recipe-book-50ace.firebaseio.com/recipes.json",
        recipesState.recipes
      );
    })
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<fromApp.AppState>
  ) {}
}
