import {
  Component,
  ElementRef,
  ViewChild,
  EventEmitter,
  Output,
  OnInit,
  OnDestroy,
  AfterViewInit
} from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { Store } from "@ngrx/store";
import { Ingredient } from "../../../shared/ingredient.model";
import { NgForm } from "@angular/forms";
import * as ShoppingListActions from "../../shopping-list.actions";
//import * as ShoppingListActions from "../store/shopping-list.actions";
import * as fromApp from "../../../store/app.reducer";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html"
})
export class ShoppingEditComponent implements OnInit, OnDestroy, AfterViewInit {
  // @ViewChild('nameInput') nameInputRef: ElementRef;
  // @ViewChild('amountInput') amountInputRef: ElementRef;
  @ViewChild("f") slForm: NgForm;
  @ViewChild("clear") clear: ElementRef;
  subscription: Subscription;
  editMode = false;
  // editedItemIndex: number;
  editedItem: Ingredient;

  constructor(
    // private store: Store<fromApp.AppState>
    private store: Store<{ shoppingList: { ingredients: Ingredient[] } }>
  ) {}

  ngAfterViewInit() {
    this.clear.nativeElement.click();
  }
  ngOnInit() {
    this.subscription = this.store
      .select("shoppingList")
      .subscribe(stateData => {
        if (stateData.editedIngredientIndex > -1) {
          this.editMode = true;
          this.editedItem = stateData.editedIngredient;
          // this.editedItemIndex=stateData.editedIngredientIndex;
          this.slForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          });
        } else {
          this.editMode = false;
        }
      });
    // this.subscription = this.shoppingListService.startedEditing.subscribe(
    //   (index: number) => {
    //     this.editMode = true;
    //     this.editedItemIndex = index;
    //     this.editedItem = this.shoppingListService.getIngredient(index);
    //     // this.slForm.setValue({
    //     //   name: this.editedItem.name,
    //     //   amount: this.editedItem.amount
    //     // });
    //   }
    // );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.store.dispatch(new ShoppingListActions.StopEdit());
  }

  onAddItem(form: NgForm) {
    // const ingName = this.nameInputRef.nativeElement.value;
    // const ingAmount = this.amountInputRef.nativeElement.value;
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      // this.shoppingListService.updateIngredient(
      //   this.editedItemIndex,
      //   newIngredient
      // );
      this.store.dispatch(
        new ShoppingListActions.UpdateIngredient({
          index:this.editedItemIndex,
          ingredient:new Ingredient
        })
      );
    } else {
      // this.shoppingListService.addIngredient(newIngredient);
      this.store.dispatch(new ShoppingListActions.AddIngredient(newIngredient));
    }
    this.editMode = false;
    form.reset();
  }
  onClear() {
    console.log("clear");
    this.slForm.reset();
    this.editMode = false;
    this.store.dispatch(new ShoppingListActions.StopEdit());
  }
  onDelete() {
    // this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.store.dispatch(
      new ShoppingListActions.DeleteIngredient(this.editedItemIndex)
      //  new ShoppingListActions.DeleteIngredient(this.editedItemIndex)
    );
    this.onClear();
  }
}
