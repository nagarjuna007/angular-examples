import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Recipe } from "../recipes.model";
import { RecipeService } from "../recipe.service";
import { Subscription } from "rxjs/Subscription";
import { Store } from "@ngrx/store";
import * as fromApp from "../../../store/app.reducer";
import { map } from "rxjs/operators";

@Component({
  selector: "app-recipes-list",
  templateUrl: "./recipes-list.component.html"
})
export class RecipesListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscription: Subscription;

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit() {
    this.subscription = this.store
      .select("recipes")
      .pipe(map(recipesState=>{
        recipesState.recipes
      }))
      .subscribe((recipes: Recipe[]) => {
        this.recipes = recipes;
      });
   // this.recipes = this.recipeService.getRecipes();
  }
  onNewRecipe() {
    this.router.navigate(["new"], { relativeTo: this.activatedRoute });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
