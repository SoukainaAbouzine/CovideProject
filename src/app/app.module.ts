import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ContenuComponent } from './contenu/contenu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { AuthGuard} from './services/AuthGuard.service';
// tslint:disable-next-line:import-spacing
import {SympthomsComponent} from './sympthoms/sympthoms.component';
import {RouterModule, Routes} from '@angular/router';
import { from } from 'rxjs';
//import { ChartsComponent } from './charts/charts.component';
//import { GoogleChartsModule } from 'angular-google-charts';
import { StatisticComponent } from './statistic/statistic.component';
// tslint:disable-next-line:max-line-length
import { MatFormFieldModule, MatInputModule, MatPaginatorModule, MatTableModule, MatButtonModule, MatSelectModule, MatTabsModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactsComponent } from './contacts/contacts.component';
import { LoginComponent } from './login/login.component';
//import { CommentComponent } from './models/comment/comment.component';
/*import { MatCardModule, MatIconModule, MatToolbarModule} from '@angular/material';
import {MatCardsLazyListModule} from '../../projects/mat-cards-lazy-list/src/lib/mat-cards-lazy-list.module';*/
const appRoutes: Routes = [
  { path: 'contact', component: ContactComponent  },
  { path: 'contacts', canActivate: [AuthGuard], component: ContactsComponent  },
  { path: 'login', component: LoginComponent  },
  { path: 'sympthoms', component: SympthomsComponent },
 // { path: 'charts', component: ChartsComponent },
  { path: '', component: ContenuComponent },
  { path: '*', component: ContenuComponent },
  { path: 'statistic', component: StatisticComponent }

  ];
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContenuComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    SympthomsComponent,
    //ChartsComponent,
    StatisticComponent,
    ContactsComponent,
    LoginComponent,
    //CommentComponent,


  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ChartsModule,
    //GoogleChartsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatTabsModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
