import { Component, OnInit } from "@angular/core";
import { Client } from "../client.model";
import { ClientService } from "../client.service";

@Component({
  selector: "app-clients",
  templateUrl: "./clients.component.html",
  styleUrls: ["./clients.component.scss"]
})
export class ClientsComponent implements OnInit {
  clients: Client[];
  selectedClient: Client;
  constructor(private clientService: ClientService) {}

  ngOnInit() {
    this.getClients();
  }
  getClients(): void {
    this.clientService
      .getClients()
      .subscribe(clients => (this.clients = clients));
  }
}
