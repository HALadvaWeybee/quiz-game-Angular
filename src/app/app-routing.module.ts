import { QuizComponent } from './quiz/quiz.component';
import { FrontComponent } from './front/front.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'quiz',component:QuizComponent},  
  {path:'front', component:FrontComponent},
  {path:'', component:FrontComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }