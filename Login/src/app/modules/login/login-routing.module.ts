import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";
import { RegistroComponent } from "./pages/registro/registro.component";
import { recuperarContraseñaComponent } from "./pages/RecuperarContraseña/recuperarContraseña.component";
const rutas:Routes = [{
    path:'',children:[
        {path:'login',component:LoginComponent},
        {path:'registro',component:RegistroComponent},
        {path:'recuperar',component:recuperarContraseñaComponent}
    ]
}];
@NgModule({imports:[RouterModule.forChild(rutas)],
exports:[RouterModule]})
export class loginRoutingModule{
    
}