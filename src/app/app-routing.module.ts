import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ListCategoryComponent } from './modules/category/list-category/list-category.component';
import { AddCategoryComponent } from './modules/category/add-category/add-category.component';
import { UpdateCategoryComponent } from './modules/category/update-category/update-category.component';
import { ListProductComponent } from './modules/product/list-product/list-product.component';
import { AddProductComponent } from './modules/product/add-product/add-product.component';
import { UpdateProductComponent } from './modules/product/update-product/update-product.component';
import { NotfoundPageComponent } from './pages/notfound-page/notfound-page.component';
import { AuthenticationLayoutComponent } from './layouts/authentication-layout/authentication-layout.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { AdminGuard } from './services/guard/admin.guard';
import { AuthGuard } from './services/guard/authen.guard';
import { ListUserComponent } from './modules/user/list-user/list-user.component';
import { UpdateUserComponent } from './modules/user/update-user/update-user.component';
import { ChangePasswordPageComponent } from './pages/change-password-page/change-password-page.component';
import { ForgotPasswordPageComponent } from './pages/forgot-password-page/forgot-password-page.component';

const routes: Routes = [
  {
    path: '',
    component: ClientLayoutComponent,
    children: [
      { path: '', component: HomePageComponent },
      { path: 'product', component: ProductPageComponent },
      { path: 'product/:slug', component: ProductDetailPageComponent },
    ],
  },
  {
    path: 'sign-up',
    component: AuthenticationLayoutComponent,
    children: [{ path: '', component: SignUpPageComponent }],
  },
  {
    path: 'sign-in',
    component: AuthenticationLayoutComponent,
    children: [{ path: '', component: SignInPageComponent }],
  },
  {
    path: 'forgot-password',
    component: AuthenticationLayoutComponent,
    children: [{ path: '', component: ForgotPasswordPageComponent }],
  },
  {
    path: 'change-password',
    component: AuthenticationLayoutComponent,
    children: [{ path: '', component: ChangePasswordPageComponent }],
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard, AdminGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'category',
        children: [
          { path: '', component: ListCategoryComponent },
          { path: 'add', component: AddCategoryComponent },
          { path: ':id/edit', component: UpdateCategoryComponent },
        ],
      },
      {
        path: 'product',
        children: [
          { path: '', component: ListProductComponent },
          { path: 'add', component: AddProductComponent },
          { path: ':id/edit', component: UpdateProductComponent },
        ],
      },
      {
        path: 'account',
        children: [
          { path: '', component: ListUserComponent },
          { path: ':id/edit', component: UpdateUserComponent },
        ],
      },
    ],
  },
  { path: '**', component: NotfoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
