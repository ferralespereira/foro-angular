import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// componentes
import { MainComponent } from './components/main/main.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { ListComponent } from './components/list/list.component';

const panelRutes: Routes = [
  {
    path: 'panel',
    component: MainComponent,
    children:[
      { path: '', component: ListComponent },
      { path: 'list', component: ListComponent },
      { path: 'add', component: AddComponent },
      { path: 'edit/:id', component: EditComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(panelRutes)
  ],
  exports: [
    RouterModule
  ]
})

export class panelRoutingModule { }
