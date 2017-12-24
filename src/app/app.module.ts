import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { appRoutes } from './routes';
import { AppComponent } from './app.component'; 
import { AgmCoreModule } from '@agm/core';
//import {ToastrModule} from 'ngx-toastr';
import {
  HomeComponent,
  DashboardComponent,
  ProductsComponent,
  ProductDetailsComponent,
  ContactsComponent,
  HeaderComponent ,
  customerApiService,
  ErrorHandlerService 
} from './index'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    ProductsComponent,
    ProductDetailsComponent,
    ContactsComponent,
    HeaderComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    //ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes, { 
      useHash: true
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBsH9fjM0MpSFE75VOKrHaQTfVHkPD0bwY'
    })
  ],
  providers: [customerApiService,ErrorHandlerService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
