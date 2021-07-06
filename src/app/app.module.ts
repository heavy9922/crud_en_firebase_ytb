import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/componets/header/header.component';
import { HeaderModule } from './shared/componets/header/header.module';
import { EmployeeFormModule } from './shared/componets/employee-form/employee-form.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    EmployeeFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
