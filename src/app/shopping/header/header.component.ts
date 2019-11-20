import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  OnDestroy
} from "@angular/core";
import { map } from "rxjs/operators";
import { Subscription } from "rxjs";
import { Store } from "@ngrx/store";
import * as formApp from "../../auth/store/app.reducer";
import { DataStorageService } from "../data-storage.service";
import { AuthService } from "../../auth/auth.service";
import * as AuthActions from "../../auth/store/auth.actions";
import * as RecipeActions from "../recipes/store/recipe.actions";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit, OnDestroy {
  private userSub: Subscription;
  isAuthenticated = false;
  constructor(
   // private dataStorageService: DataStorageService,
   // private authService: AuthService,
    private store: Store<formApp.AppState>
  ) {}
  ngOnInit() {
    this.userSub = this.store
      .select("auth")
      .pipe(map(authState => authState.user))
      .subscribe(user => {
        this.isAuthenticated = !!user;
      });
  }
  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
  @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
  onSaveData() {
    this.dataStorageService.storeRecipes();
  }
  onFetchData() {
    // this.dataStorageService.fetchRecipes().subscribe();
    this.store.dispatch(new RecipeActions.FetchRecipes());
  }
  onLogout() {
    // this.authService.logout();
    this.store.dispatch(new AuthActions.Logout());
  }
}
