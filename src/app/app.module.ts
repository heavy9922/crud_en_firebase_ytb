import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/componets/header/header.component';
import { HeaderModule } from './shared/componets/header/header.module';
import { EmployeeFormModule } from './shared/componets/employee-form/employee-form.module';

// import de firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule} from '@angular/fire/firestore'
import { environment } from 'src/environments/environment';
import { EmployeesService } from './pages/services/employees.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    EmployeeFormModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    
  ],
  providers: [AngularFirestoreModule, EmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
