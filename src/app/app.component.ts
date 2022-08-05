import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'quizTask';
  question: any;
  a: any;
  b: any;
  c: any;
  d: any;
  menuShow: boolean = true;
  resultShow: boolean = false;

  constructor() {
    this.question = 'Which of the following tag is used for drop down list?';
    this.a = 'select';
    this.c = 'textarea';
    this.b = 'text';
    this.d = 'dropdown';
  }
  mcqData: any = [
    {
      question: 'Which of the following tag is used for drop down list?',
      a: 'select',
      b: 'text',
      c: 'textarea',
      d: 'dropdown',
      answer: 'a',
    },
    {
      question: 'By which tag, an unordered list is represented?',
      a: 'u',
      b: 'I',
      c: 'ul',
      d: 'ol',
      answer: 'c',
    },
    {
      question: 'What is HTML',
      a: 'markup language',
      b: 'programming language',
      c: 'not a language',
      d: 'none of these',
      answer: 'a',
    },
    {
      question: ' Which one of the following is a form element?',
      a: 'text box',
      b: 'radio button',
      c: 'submit button',
      d: 'All of these',
      answer: 'd',
    },
  ];
  answers: any[] = this.mcqData.map((ele: any) => ele.answer);
  tempArr: any[] = this.mcqData;
  count: number = 0;
  leng:number = this.mcqData.length;
  
  select(item: any) {
    if (this.tempArr.length === 1) {
      this.menuShow = false;
      this.resultShow = true;
    }
    if (this.answers[0] == item) {
      this.count = this.count + 1;
    }
    if (this.tempArr.length > 1) {
      this.tempArr.splice(0, 1);
      this.answers.splice(0, 1);
      this.question = this.tempArr[0].question;
      this.a = this.tempArr[0].a;
      this.b = this.tempArr[0].b;
      this.c = this.tempArr[0].c;
      this.d = this.tempArr[0].d;
    }
  }
}