import { Component, OnInit, OnDestory } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html'
})

export class ShoppingListComponent implements OnInit, OnDestory {
  ingredients: Ingredient[];
  private igChangeSub: Subscription;


  constructor(private shoppingListService: ShoppingListService) {

  }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.igChangeSub = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }
  onEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index);
  }
  ngOnDestory() {
    this.igChangeSub.unsubscribe();
  }

}