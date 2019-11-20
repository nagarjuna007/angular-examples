import { Action } from "@ngrx/store";
import { Ingredient } from "../../shared/ingredient.model";

const initialState = {
  ingredients: [new Ingredient("Apple", 5), new Ingredient("Tomoto", 15)]
};

export function shoppingListReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action]
      };
  }
  return state;
}
