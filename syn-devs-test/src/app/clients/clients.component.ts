import { Component, OnInit } from "@angular/core";
import { Client } from "../client.model";
import { ClientService } from "../client.service";
import { selectClient, reset } from "../actions/client.actions";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";

@Component({
  selector: "app-clients",
  templateUrl: "./clients.component.html",
  styleUrls: ["./clients.component.scss"]
})
export class ClientsComponent implements OnInit {
  clients: Client[];
  selectedClient$: Observable<any>;
  constructor(
    private clientService: ClientService,
    private store: Store<{ client: any }>
  ) {
    this.selectedClient$ = store.pipe(select("client"));
  }

  ngOnInit() {
    this.getClients();
  }
  getClients(): void {
    this.clientService
      .getClients()
      .subscribe(clients => (this.clients = clients));
  }
  selectClient(client: Client): void {
    console.log("Selecting");
    this.store.dispatch(selectClient({ client: client }));
  }
  deleteClient(): void {
    console.log("Deleting");
    this.store.dispatch(reset());
  }
}
