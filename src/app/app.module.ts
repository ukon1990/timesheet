import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './modules/material.module';
import 'hammerjs';

import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { LoggingComponent } from './logging/logging.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    LoggingComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: OverviewComponent}
    ]),
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
