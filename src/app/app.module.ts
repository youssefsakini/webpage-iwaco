import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CollapseComponent } from './components/collapse/collapse.component';
import { CollapseSectionComponent } from './components/collapse-section/collapse-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CollapseComponent,
    CollapseSectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
