import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MobileComponent } from './contact/mobile/mobile.component';
import { WebComponent } from './contact/web/web.component';
import { OthersComponent } from './contact/others/others.component';

export const routes: Routes = [
    // {path: '', component: HomeComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'}, // better
    {path: 'home', component: HomeComponent, title: "home"}, // page title (tab title)
    {path: 'about', component: AboutComponent, title: "about"},
    {path: 'contact', component: ContactComponent, title: "contact", children: [
        {path: '', redirectTo: 'mobile', pathMatch: 'full'},
        {path: 'mobile', component: MobileComponent},
        {path: 'web', component: WebComponent},
        {path: 'others', component: OthersComponent},
    ]},
    {path: 'product', component: ProductComponent, title: "product"},
    {path: '**', component: NotFoundComponent, title: "Not Found"}
];