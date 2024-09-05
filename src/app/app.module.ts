import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {UiModule} from "./ui/ui.module";

import {AppComponent} from "./app.component";
import {HeaderComponent} from "./header/header.component";
import {UserComponent} from "./user/user.component";
import {TasksModule} from "./tasks/tasks.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent
  ], //none standalone component
  imports: [BrowserModule, UiModule, TasksModule], //standalone component
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
