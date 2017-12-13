import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { ExampleModule } from './example/example.module';

@NgModule({
  declarations: [AppComponent, ExampleComponent],
  imports: [BrowserModule, ExampleModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
