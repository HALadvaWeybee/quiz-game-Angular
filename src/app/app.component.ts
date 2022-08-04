import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'quizTask';

  mcqData:any = [
    {
      question: "Which of the following tag is used for drop down list?",
      a: "select",
      b: "text",
      c: "textarea",
      d: "dropdown",
      answer: "a",
    },
    {
      question: "By which tag, an unordered list is represented?",
      a: "u",
      b: "I",
      c: "ul",
      d: "ol",
      answer: "c",
    },
    {
      question: "What is HTML",
      a: "markup language",
      b: "programming language",
      c: "not a language",
      d: "none of these",
      answer: "a",
    },
    // {
    //   question: "What is the default item marker in unordered lists of HTML?",
    //   a: "Circle",
    //   b: "Marker",
    //   c: "disc",
    //   d: "None of the above",
    //   answer: "c",
    // },
    // {
    //   question: " Which one of the following is a form element?",
    //   a: "text box",
    //   b: "radio button",
    //   c: "submit button",
    //   d: "All of these",
    //   answer: "d",
    // },
    // {
    //   question: "Which one of the following is incorrect?",
    //   a: "<label> tag in HTML is used for creating a tag for form elements.",
    //   b: "<label> can be used to increase the clickable area of buttons",
    //   c: "id attribute is used with <label> to increase the clickable area of form elements",
    //   d: "None of the above",
    //   answer: "c",
    // },
  ];
  question:any = "Which one of the following is a form element?";
  a=  "text box"
  b=  "radio button"
  c= "submit button"
  d= "All of these"
  i = 0;
  j:any = 0;

  answers:string[] = ["select","ul","markup language","All of these"];
  receiveAns:string[]=[];
  tempData:any[] = this.mcqData;
  select(item:string) {
     console.log(item); 
     this.receiveAns.push(item);
     for(this.j = 0; this.j < this.tempData.length; this.j++) {
         this.question = this.tempData[this.j].question;
         this.a = this.tempData[this.j].a;
         this.b = this.tempData[this.j].b;
         this.c = this.tempData[this.j].c;
         this.d = this.tempData[this.j].d;      
         this.tempData.splice(this.j, 1);
         break;
     }    
     console.log(this.receiveAns);  
  }
  
}
