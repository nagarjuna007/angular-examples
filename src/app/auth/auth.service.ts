import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient) {}
  signup(email: string, password: string) {
    let headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    let options = { headers: headers };
    let body = {
      email: email,
      password: password,
      returnSecureToken: true
    };
    return this.http
      .post<AuthResponseData>(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDO53Hz1KkUDp2IjIEEcS9-E0ZWWjtZ0ow",
        body,
        options
      )
      .pipe(catchError(this.handleError));
  }
  login(email: string, password: string) {
    let headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    let options = { headers: headers };
    let body = {
      email: email,
      password: password,
      returnSecureToken: true
    };
    return this.http
      .post<AuthResponseData>(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDO53Hz1KkUDp2IjIEEcS9-E0ZWWjtZ0ow",
        body,
        options
      )
      .pipe(catchError(this.handleError));
  }
  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = "An Unknown error occured..!";
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case "EMAIL_EXISTS":
        errorMessage = "Email Already exits..!";
        break;
      case "EMAIL_NOT_FOUND":
        errorMessage = "Email Not Found..!";
        break;
      case "INVALID_PASSWORD":
        errorMessage = "INVALID_PASSWORD Already exits..!";
        break;
      case "USER_DISABLED":
        errorMessage = "USER_DISABLED Already exits..!";
    }
    return throwError(errorMessage);
  }
}
