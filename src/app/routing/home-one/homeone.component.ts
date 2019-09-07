import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-home-one',
  templateUrl: './homeone.component.html'
})
export class HomeOneComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }
  onLoadServer(id: number) {
    this.router.navigate(['/nav/servers', id, 'edit'], { queryParams: { allowEdit: '1' }, fragment: 'loading' });
  }
  onLogin() {
    this.authService.login();
    
  }
  onLogout() {
    this.authService.logout();
  }
}
