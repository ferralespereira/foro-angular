// Importar los modulos del router
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar componentes
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';

// Array de tutas
const appRoutes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'home', component:HomeComponent },
  { path: 'login', component:LoginComponent },
  { path: 'register', component:RegisterComponent },
  { path: 'settings', component:UserEditComponent },
  { path: '**', component:LoginComponent }
];

// Exportar configuracion
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
