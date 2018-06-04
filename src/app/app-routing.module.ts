import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgCodeEditorComponent } from './ng-code-editor/ng-code-editor.component';

const routes: Routes = [
  {path: 'editor', component: NgCodeEditorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
