import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { PrewiewComponent } from './components/prewiew/prewiew.component';

export const routes: Routes = [
    {path:'',
        pathMatch:'full',
        redirectTo:'home'
    },
    {
        path:'home',
        component:HomeComponent,
      
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'preview',
        component:PrewiewComponent
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
