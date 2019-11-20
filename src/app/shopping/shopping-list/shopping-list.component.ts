import { Component, OnInit, OnDestroy } from "@angular/core";
import { Store } from "@ngrx/store";
import { Ingredient } from "../../shared/ingredient.model";
import { Subscription, Observable } from "rxjs";
import * as ShoppingListActions from "./store/shopping-list.actions";
import * as fromApp from "../../store/app.reducer";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html"
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Observable<{ ingredients: Ingredient[] }>;
  private igChangeSub: Subscription;

  constructor(
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit() {
    this.ingredients = this.store.select("shoppingList");
    // this.store.select("shoppingList").subscribe();
    // this.ingredients = this.shoppingListService.getIngredients();
    // this.igChangeSub = this.shoppingListService.ingredientsChanged.subscribe(
    //   (ingredients: Ingredient[]) => {
    //     this.ingredients = ingredients;
    //   }
    // );
  }
  onEditItem(index: number) {
   // this.shoppingListService.startedEditing.next(index);
   this.store.dispatch(new ShoppingListActions.StartEdit(index));
  }
  ngOnDestroy() {
    // this.igChangeSub.unsubscribe();
  }
}
