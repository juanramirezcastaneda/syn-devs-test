import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ClientsComponent } from "./clients/clients.component";
import { StoreModule } from "@ngrx/store";
import { clientReducer } from "./reducers/client.reducer";
import { EffectsModule } from "@ngrx/effects";
import { ClientEffects } from "./effects/client.effects";

@NgModule({
  declarations: [AppComponent, ClientsComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ client: clientReducer }),
    EffectsModule.forRoot([ClientEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
