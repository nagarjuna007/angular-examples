import { Component, Input, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-service-home',
  templateUrl: './home.component.html',
  providers: [AccountsService]
})
export class HomeComponent implements OnInit {
  constructor(private accountsService: AccountsService) { }
  accounts: { name: string, status: string }[] = [];

  ngOnInit(){
    this.accounts=this.accountsService.accounts;
  }
}
