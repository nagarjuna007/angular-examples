import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html'
})
export class ServersComponent implements OnInit {
  private servers: { id: number, name: string, status: string }[] = [];

  constructor(private serversService: ServersService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }
  onReload() {
    // this.router.navigate(['/servers'], { relativeTo: this.activatedRoute });
    this.router.navigate(['/servers']);
  }

}