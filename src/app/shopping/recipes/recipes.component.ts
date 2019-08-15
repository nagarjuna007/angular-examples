import { Component } from '@angular/core';
import { Recipe } from './recipes.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html'
})

export class RecipesComponent {
  selectedRecipe: Recipe;
}