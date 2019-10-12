import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ShoppingComponent } from "./shopping.component";
import { HeaderComponent } from "./header/header.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { RecipesListComponent } from "./recipes/recipes-list/recipes-list.component";
import { RecipesDetailComponent } from "./recipes/recipes-detail/recipes-detail.component";
import { RecipesItemComponent } from "./recipes/recipes-list/recipes-item/recipes-item.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { ShoppingEditComponent } from "./shopping-list/shopping-edit/shopping-edit.component";
import { ShoppingHomeComponent } from "./home/home.component";
import { ShoppingListService } from "./shopping-list/shopping-list.service";
import { RecipeService } from "./recipes/recipe.service";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { DataStorageService } from "./data-storage.service";
import { RecipesResloverService } from "./recipes/recipes-reslover.service";
import { AuthComponent } from "../auth/auth.component";
import { AuthService } from "../auth/auth.service";
import { LoaderComponent } from "../loader/loader.component";
import { AuthInterceptorService } from "../auth/auth-interceptor.service";
import {AuthGuard} from '../auth/auth.guard';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: "shopping",
        component: ShoppingComponent,
        canActivate:[AuthGuard],
        children: [
          { path: "home", component: ShoppingHomeComponent },
          {
            path: "recipes",
            component: RecipesComponent,
            canActivate:[AuthGuard],
            children: [
              { path: "", component: RecipeStartComponent },
              { path: "new", component: RecipeEditComponent },
              {
                path: ":id",
                component: RecipesDetailComponent
                //,resolve: [RecipesResloverService]
              },
              {
                path: ":id/edit",
                component: RecipeEditComponent
                //,resolve: [RecipesResloverService]
              }
            ]
          },
          { path: "shopping-list", component: ShoppingListComponent },
          { path: "auth", component: AuthComponent }
        ]
      }
    ])
  ],
  declarations: [
    ShoppingComponent,
    ShoppingHomeComponent,
    RecipeStartComponent,
    HeaderComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailComponent,
    RecipesItemComponent,
    RecipeEditComponent,
    ShoppingListComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    AuthComponent,
    LoaderComponent
  ],
  providers: [
    ShoppingListService,
    RecipeService,
    DataStorageService,
    RecipesResloverService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ]
})
export class ShoppingModule {}
