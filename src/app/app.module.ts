import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { NotfoundPageComponent } from './pages/notfound-page/notfound-page.component';
import { ListCategoryComponent } from './modules/category/list-category/list-category.component';
import { AddCategoryComponent } from './modules/category/add-category/add-category.component';
import { UpdateCategoryComponent } from './modules/category/update-category/update-category.component';
import { ListProductComponent } from './modules/product/list-product/list-product.component';
import { AddProductComponent } from './modules/product/add-product/add-product.component';
import { UpdateProductComponent } from './modules/product/update-product/update-product.component';
import { ListUserComponent } from './modules/user/list-user/list-user.component';
import { UpdateUserComponent } from './modules/user/update-user/update-user.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { HeaderComponent } from './components/common/header/header.component';
import { SliderComponent } from './components/common/slider/slider.component';
import { FooterComponent } from './components/common/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductPageComponent,
    ProductDetailPageComponent,
    NewsPageComponent,
    NotfoundPageComponent,
    ListCategoryComponent,
    AddCategoryComponent,
    UpdateCategoryComponent,
    ListProductComponent,
    AddProductComponent,
    UpdateProductComponent,
    ListUserComponent,
    UpdateUserComponent,
    AdminLayoutComponent,
    ClientLayoutComponent,
    HeaderComponent,
    SliderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
