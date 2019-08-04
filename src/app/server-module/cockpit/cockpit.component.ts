import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html'
})

export class CockpitComponent {
  @Output() ServerCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('ServerContentInput') ServerContentInput: ElementRef;

  onAddServer(serverNameInput: HTMLInputElement) {
    console.log(this.ServerContentInput);
    this.ServerCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.ServerContentInput.nativeElement.value
    });
  }
  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.ServerContentInput.nativeElement.value
    });
  }
}