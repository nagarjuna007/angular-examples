import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from "@angular/router";
import { ShoppingComponent } from './shopping.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipesItemComponent } from './recipes/recipes-list/recipes-item/recipes-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingHomeComponent } from './home/home.component';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeService } from './recipes/recipe.service';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'shopping', component: ShoppingComponent, children: [
          { path: 'home', component: ShoppingHomeComponent }
        ]
      }
    ])
  ],
  declarations: [ShoppingComponent, ShoppingHomeComponent, HeaderComponent, RecipesComponent, RecipesListComponent, RecipesDetailComponent, RecipesItemComponent, ShoppingListComponent, ShoppingListComponent, ShoppingEditComponent],
  providers: [ShoppingListService, RecipeService]
})
export class ShoppingModule { }
