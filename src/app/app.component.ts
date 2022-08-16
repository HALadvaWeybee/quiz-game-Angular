import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'quizTask';
  question: string = '';
  a: string = '';
  b: string = '';
  c: string = '';
  d: string = '';
  menuShow: boolean = true;
  resultShow: boolean = false;
  url='https://opentdb.com/api.php?amount=10';
  quesArr:{question:string, a:any, b:any, c:any, d:any,answer:string}[] =[];
  answers:any[] = [];
  tempAns:any[] = [];
  leng:number=0;
  count:number = 0;

  constructor(private http: HttpClient) {
    this.getApiData();
  }
  
  // shuffle(array:any) {
  //   let currentIndex = array.length,  randomIndex;
  //   while (currentIndex != 0) {
  //     randomIndex = Math.floor(Math.random() * currentIndex);
  //     currentIndex--;
  //     [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  //   }
  //   return array;
  // }

  getApiData() {
    this.http.get(this.url).subscribe((data:any) => {
      data.results.forEach((ele:any) => {
         this.tempAns = [];
         this.tempAns.push(ele['correct_answer']);
         this.tempAns.push(ele['incorrect_answers'][0]);
         this.tempAns.push(ele['incorrect_answers'][1]?ele['incorrect_answers'][1]:'none');
         this.tempAns.push(ele['incorrect_answers'][2]?ele['incorrect_answers'][2]:'none');
         this.tempAns = this.tempAns.sort(() => (Math.random() > .5) ? 1 : -1);
        // this.tempAns = this.shuffle(this.tempAns);
         this.quesArr.push({
            question: ele.question,
            a: this.tempAns[0],
            b: this.tempAns[1],
            c: this.tempAns[2],
            d: this.tempAns[3],
            answer: ele['correct_answer'],
         })
         this.answers.push(ele['correct_answer']);
        }
      );
      this.leng = this.quesArr.length;
      this.count = this.quesArr.length;  
      console.log("answer", this.answers);
      this.question = this.quesArr[0].question;
      this.a = this.quesArr[0].a;
      this.b = this.quesArr[0].b;
      this.c = this.quesArr[0].c;
      this.d = this.quesArr[0].d;    
    }); 
  }
  
  select(item: any) {    
    if (this.quesArr.length === 1) {
      this.menuShow = false;
      this.resultShow = true;
    }
    if (this.answers[0] != item) {
      this.count = (this.count - 1);
    }
    if (this.quesArr.length > 1) {
      this.quesArr.splice(0, 1);
      this.answers.splice(0, 1);
      this.question = this.quesArr[0].question;
      this.a = this.quesArr[0].a;
      this.b = this.quesArr[0].b;
      this.c = this.quesArr[0].c;
      this.d = this.quesArr[0].d;
    }
  }
}