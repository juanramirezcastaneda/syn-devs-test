import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";
import { ClientService } from "../client.service";

@Injectable()
export class ClientEffects {
  loadClients$ = createEffect(() =>
    this.actions$.pipe(
      ofType("[Clients Page] Load Clients"),
      mergeMap(() => {
        return this.clientService.fetchClients().pipe(
          map(clients => {
            return {
              type: "[Clients API] Clients Loaded Success",
              clients: clients
            };
          }),
          catchError(() => EMPTY)
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private clientService: ClientService
  ) {}
}
