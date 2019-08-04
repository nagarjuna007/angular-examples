import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html'
})

export class ServersComponent {
  allowNewServer = false;
  serverCreateStatus = "No server was created";
  serverName="";
  serverName1='Twoway';
  serverCreated=false;
  servers=['TestServer','TestServer 2']

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 4000);
  }
  onCrateServer() {
    this.serverCreated=true;
    this.servers.push(this.serverName);
    this.serverCreateStatus = "server was created..! Name is : "+this.serverName;
  }
  onUpdateServerName(event: Event) {
    this.serverName=(<HTMLInputElement>event.target).value;
  }

}