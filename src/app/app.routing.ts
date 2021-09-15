// Importar los modulos del router
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserGuard } from './services/user.guard';
import { NoIdentityGuard } from './services/no.identity.guard';

// Importar componentes
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { TopicsComponent } from './components/topics/topics.component';
import { TopicDetailComponent } from './components/topic-detail/topic-detail.component';
import { UsersComponent } from './components/users/users.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SearchComponent } from './components/search/search.component';

// Array de tutas
const appRoutes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'home', component:HomeComponent },
  { path: 'login', canActivate: [NoIdentityGuard], component:LoginComponent },
  { path: 'register', canActivate: [NoIdentityGuard], component:RegisterComponent },
  { path: 'settings', canActivate: [UserGuard], component:UserEditComponent },
  { path: 'topics', component:TopicsComponent },
  { path: 'topics/:page', component:TopicsComponent },
  { path: 'topic/:id', component:TopicDetailComponent },
  { path: 'users', component:UsersComponent },
  { path: 'profile/:id', component:ProfileComponent },
  { path: 'search/:search', component:SearchComponent },
  { path: '**', component:HomeComponent }
];

// Exportar configuracion
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
