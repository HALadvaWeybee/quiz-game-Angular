import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApidataService } from '../apidata.service';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.scss']
})
export class FrontComponent {
 
  constructor(private route: Router, private apidata: ApidataService) { }
  url:string = 'https://opentdb.com/api.php';
 
  getFormValue(item:any) {
    console.log("item",item);
    let tempUrl = ``;
    tempUrl = `${this.url}?amount=${item.amount}&category=${item.category!='any' ? item.category:''}&difficulty=${item.difficulty!='any' ? item.difficulty: ''}&type=${item.type!='any' ? item.type : ''}&encode=${item.encode!='default' ? item.encode : ''}`;
    console.log("url", tempUrl);
    this.route.navigate(['quiz']);
    this.apidata.data = tempUrl;
    tempUrl = ``;
  }
}
