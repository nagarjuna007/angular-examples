import { Component } from '@angular/core';

@Component({
  selector: 'app-serverElement',
  templateUrl: './serverelement.component.html'
})

export class ServerElementComponent {
  serverElements = [{ type: 'server', name: 'Test Server', content: 'Test a server' }];

  onServerAdded(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }
  onChangeFirst() {
    this.serverElements[0].name = 'Changed!';
  }
  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }
}