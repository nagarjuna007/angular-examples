import { Component, Input, OnInit } from "@angular/core";
import { Recipe } from "../recipes.model";
import { RecipeService } from "../recipe.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import * as fromApp from "../../store/app.reducer";
import { switchMap, map, catchError, tap } from "rxjs/operators";
import * as RecipesActions from "../store/recipe.actions";
import * as ShoppingListActions from "../../shopping-list/store/shopping-list.actions";

@Component({
  selector: "app-recipes-detail",
  templateUrl: "./recipes-detail.component.html"
})
export class RecipesDetailComponent implements OnInit {
  // @Input() recipe: Recipe;
  recipe: Recipe;
  id: number;

  constructor(
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store<fromApp.AppState>
  ) {}
  ngOnInit() {
    this.activatedRoute.params
      .pipe(
        map(params => {
          return +params["id"];
        }),
        switchMap(id => {
          this.id = id;
          return this.store.select("recipes");
        }),
        map(recipesState => {
          return recipesState.recipes.find((recipes, index) => {
            return index === this.id;
          });
        })
      )
      .subscribe(recipe => {
        this.recipe = recipe;
      });
  }

  onAddToShoppingList() {
    // this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    this.store.dispatch(new ShoppingListActions.AddIngredients(this.recipe.ingredients));
  }
  editRecipe() {
    this.router.navigate(["edit"], { relativeTo: this.activatedRoute });
  }
  deleteRecipe() {
    // this.recipeService.deleteRecipe(this.id);
    this.store.dispatch(new RecipesActions.DeleteRecipe(this.id));
    this.router.navigate(["/shopping/recipes"]);
  }
}
