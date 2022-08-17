import { ErrorComponent } from './error/error.component';
import { QuizComponent } from './quiz/quiz.component';
import { FrontComponent } from './front/front.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'quiz',component:QuizComponent},  
  // {path:'front', component:FrontComponent},
  {path:'', component:FrontComponent},
  {path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }