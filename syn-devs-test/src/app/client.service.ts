import { Injectable } from "@angular/core";
import { Observable, from } from "rxjs";
import { Client } from "./client.model";
import { Store, select } from "@ngrx/store";
import { selectClient, reset } from "./actions/client.actions";

@Injectable({
  providedIn: "root"
})
export class ClientService {
  selectedClient$: Observable<any>;

  constructor(private store: Store<{ client: any }>) {
    this.selectedClient$ = store.pipe(select("client"));
  }

  public getClients(): Observable<Client[]> {
    const testClient = new Client(
      "male",
      {
        title: "mr",
        first: "crispim",
        last: "da luz"
      },
      {
        street: "1133 rua da paz ",
        city: "cotia",
        state: "tocantins",
        postcode: 54768,
        coordinates: {
          latitude: "-73.5155",
          longitude: "-144.1368"
        },
        timezone: {
          offset: "+3:00",
          description: "Baghdad, Riyadh, Moscow, St. Petersburg"
        }
      },
      "crispim.daluz@example.com",
      {
        uuid: "348134f7-de19-4b93-9511-4dd341a9ce30",
        username: "bigbutterfly371",
        password: "freepass",
        salt: "Y7fKRMpv",
        md5: "b1ae57991858ee762170e4c66ab16351",
        sha1: "67dfa1e7a7338d8b98c92c5fc018ae283d06e80c",
        sha256:
          "8aab1c9927f5023862692715f5963ab3c1a21d672d53ba5754adac18f2205b9c"
      },
      {
        date: "1989-10-27T10:54:48Z",
        age: 29
      },
      {
        date: "2016-05-08T17:10:16Z",
        age: 3
      },
      "465465465",
      "(93) 1140-2362",
      {
        name: "",
        value: null
      },
      {
        large: "https://randomuser.me/api/portraits/men/22.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/22.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/22.jpg"
      },
      "BR"
    );

    const testClient2 = new Client(
      "male",
      {
        title: "mr",
        first: "juan",
        last: "ramires"
      },
      {
        street: "asfasd street ",
        city: "cotia",
        state: "tocantins",
        postcode: 54768,
        coordinates: {
          latitude: "-73.5155",
          longitude: "-144.1368"
        },
        timezone: {
          offset: "+3:00",
          description: "Baghdad, Riyadh, Moscow, St. Petersburg"
        }
      },
      "juan.daluz@example.com",
      {
        uuid: "348134f7-de19-4b93-9511-4dd341a9ce30",
        username: "fidein",
        password: "freepass",
        salt: "Y7fKRMpv",
        md5: "b1ae57991858ee762170e4c66ab16351",
        sha1: "67dfa1e7a7338d8b98c92c5fc018ae283d06e80c",
        sha256:
          "8aab1c9927f5023862692715f5963ab3c1a21d672d53ba5754adac18f2205b9c"
      },
      {
        date: "1989-10-27T10:54:48Z",
        age: 29
      },
      {
        date: "2016-05-08T17:10:16Z",
        age: 3
      },
      "465465465",
      "(93) 1140-2362",
      {
        name: "",
        value: null
      },
      {
        large: "https://randomuser.me/api/portraits/men/22.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/22.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/22.jpg"
      },
      "BR"
    );

    const arrayToReturn = new Array<Client>(testClient, testClient2);
    return from([arrayToReturn]);
  }

  public selectClient(client: Client) {
    this.store.dispatch(selectClient({ client: client }));
  }

  public deleteClient(): void {
    this.store.dispatch(reset());
  }

  public getSelectedClient() {
    return this.store.pipe(select("client"));
  }
}
