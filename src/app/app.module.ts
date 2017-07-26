import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import { JumbotronComponent } from './jumbotron/jumbotron.component';

@NgModule({
    declarations: [AppComponent,JumbotronComponent],
    imports: [BrowserModule, JumbotronComponent],
    bootstrap: [AppComponent]
})
export class AppModule {

}