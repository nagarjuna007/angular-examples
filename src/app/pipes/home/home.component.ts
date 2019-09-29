import { Component } from "@angular/core";

@Component({
  selector: "my-pipe-home",
  templateUrl: "./home.component.html"
})
export class HomeComponent {
  appStatus = new Promise((reslove, reject) => {
    setTimeout(() => {
      reslove("stable");
    }, 2000);
  });
  servers = [
    {
      instanceType: "medium",
      name: "Production Server",
      status: "stable",
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: "large",
      name: "User Database",
      status: "stable",
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: "small",
      name: "Development Server",
      status: "offline",
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: "small",
      name: "Testing Environment Server",
      status: "stable",
      started: new Date(15, 1, 2017)
    }
  ];
  filteredStatus = "";
  getStatusClasses(server: {
    instanceType: string;
    name: string;
    status: string;
    started: Date;
  }) {
    return {
      "list-group-item-success": server.status === "stable",
      "list-group-item-warning": server.status === "offline",
      "list-group-item-danger": server.status === "critical"
    };
  }
  onAddServer() {
    this.servers.push({
      instanceType: "small",
      name: "Testing Environment Server",
      status: "stable",
      started: new Date(15, 1, 2017)
    });
  }
}
