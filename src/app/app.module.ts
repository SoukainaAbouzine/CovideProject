import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ContenuComponent } from './contenu/contenu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import {StatiComponent} from  './stati/stati.component';
import{RouterModule, Routes} from '@angular/router';
import { from } from 'rxjs';
import { ChartsComponent } from './charts/charts.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { GenericService } from './services/generic.service';
import { StatisticComponent } from './statistic/statistic.component';
import { MatFormFieldModule, MatInputModule, MatPaginatorModule, MatTableModule, MatButtonModule, MatSelectModule, MatTabsModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
const appRoutes: Routes = [
  { path: 'contact', component: ContactComponent  },
  { path: 'stati', component: StatiComponent },
  { path: 'charts', component: ChartsComponent },
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
    StatiComponent,
    ChartsComponent,
    StatisticComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ChartsModule,
    GoogleChartsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatTabsModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [
    GenericService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
