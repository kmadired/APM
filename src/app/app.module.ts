import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent} from './products/product-list.component'
import { ConverToSpacesPioe } from './shared/conver.to.spaces.pipe'
import { StarComponent } from './shared/star.component';
import { ProductService} from './products/product.service';
import { WelcomeComponent } from './home/welcome.component';
import { SearchAppsComponent } from './searchapps/searchapps.component';
import { SearchService } from './searchapps/search.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConverToSpacesPioe,
    StarComponent,    
    WelcomeComponent, 
    SearchAppsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([], {useHash: true})
  ],
  providers: [ProductService, SearchService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
