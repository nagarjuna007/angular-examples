import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Recipe } from "../recipes.model";
import { RecipeService } from "../recipe.service";
import { Subscription } from "rxjs/Subscription";

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
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.subscription = this.recipeService.recipesChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );
    this.recipes = this.recipeService.getRecipes();
  }
  onNewRecipe() {
    this.router.navigate(["new"], { relativeTo: this.activatedRoute });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
