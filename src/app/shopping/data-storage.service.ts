import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RecipeService } from "./recipes/recipe.service";
import { Recipe } from "./recipes/recipes.model";
import { map, tap } from "rxjs/operators";

@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}
  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put(
        "https://course-recipe-book-50ace.firebaseio.com/recipes.json",
        recipes
      )
      .subscribe(response => {
        console.log(response);
      });
  }
  fetchRecipes() {
    return this.http
      .get<Recipe[]>(
        "https://course-recipe-book-50ace.firebaseio.com/recipes.json"
      )
      .pipe(
        tap(
          // Log the result or error
          recipes => this.recipeService.setRecipes(recipes)
        )
      );
    // .pipe(
    //   map(recipes => {
    //     return recipes.map(recipe => {
    //       return {
    //         ...recipe,
    //         ingredients: recipe.ingredients ? recipe.ingredients : []
    //       };
    //     });
    //   }),
    //   tap(recipes => {
    //     this.recipeService.setRecipes(recipes);
    //   })
    // );
  }
}
