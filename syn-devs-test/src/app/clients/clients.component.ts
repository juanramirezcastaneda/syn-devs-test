import { Component, OnInit } from "@angular/core";
import { Client } from "../client.model";
import { ClientService } from "../client.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-clients",
  templateUrl: "./clients.component.html",
  styleUrls: ["./clients.component.scss"]
})
export class ClientsComponent implements OnInit {
  clients: Client[];
  selectedClient$: Observable<any>;
  constructor(private clientService: ClientService) {}

  ngOnInit() {
    this.getClients();
    this.selectedClient$ = this.clientService.getSelectedClient();
  }

  getClients(): void {
    this.clientService
      .getMockedClients()
      .subscribe(clients => (this.clients = clients));
  }
  selectClient(client: Client): void {
    console.log("Selecting");
    this.clientService.selectClient(client);
  }
  deleteClient(): void {
    console.log("Deleting");
    this.clientService.deleteClient();
  }
}
