import { NgModule } from "@angular/core";
import { Routes, RouterModule, Router } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { ProductsComponent } from "./products/products.component";
import { ServicesComponent } from "./services/services.component";
import { ContactComponent } from "./contact/contact.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'products', component: ProductsComponent},
    { path: 'services', component: ServicesComponent},
    { path: 'contact', component: ContactComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{
    
}