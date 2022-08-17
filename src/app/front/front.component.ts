import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApidataService } from '../apidata.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.scss']
})
export class FrontComponent implements OnInit {
 
  defaultValues:any = {};
  ngOnInit(): void {
    this.defaultValues = {
      defaultData:10,
    }
  }
  constructor(private route: Router, private apidata: ApidataService) { }
  url:string = 'https://opentdb.com/api.php';
 
  getFormValue(item:any) {
    console.log("item",item);
    let tempUrl = ``;
    tempUrl = `${this.url}?amount=${item.amount}&category=${item.category!='any' ? item.category:''}&difficulty=${item.difficulty!='any' ? item.difficulty: ''}&type=${item.type!='any' ? item.type : ''}`;
    console.log("url", tempUrl);
    this.route.navigate(['quiz']);
    this.apidata.data = tempUrl;
    tempUrl = ``;
  }
}
