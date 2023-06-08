import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatTabsModule } from '@angular/material/tabs';

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
import { DashboardHeaderComponent } from './components/dashboard/dashboard-header/dashboard-header.component';
import { DashboardSidebarComponent } from './components/dashboard/dashboard-sidebar/dashboard-sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MenuComponent } from './components/common/menu/menu.component';
import { ProductAppleComponent } from './components/product-apple/product-apple.component';
import { ProductSamsungComponent } from './components/product-samsung/product-samsung.component';
import { ProductXiaomiOppoComponent } from './components/product-xiaomi-oppo/product-xiaomi-oppo.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { AuthenticationLayoutComponent } from './layouts/authentication-layout/authentication-layout.component';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { ProductMacbookComponent } from './components/product-macbook/product-macbook.component';
import { SearchComponent } from './components/search/search.component';

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
    FooterComponent,
    DashboardHeaderComponent,
    DashboardSidebarComponent,
    DashboardComponent,
    MenuComponent,
    ProductAppleComponent,
    ProductSamsungComponent,
    ProductXiaomiOppoComponent,
    SocialMediaComponent,
    SignUpPageComponent,
    AuthenticationLayoutComponent,
    SignInPageComponent,
    ProductMacbookComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule,
    ToastrModule.forRoot(),
    NgxPaginationModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
