import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {


  @Input() noColumns: number = 0;
  @Input() tableColumnNames: String[] = [''];
  @Input() tableValues: any[][] = [['']];


  constructor(private router: Router) { }

  ngOnInit() {
    this.noColumns = 4;
    this.tableColumnNames = ['ID','Name','Description','Date'];
    this.tableValues = [
      ['1','2','3','4'],
      ['A','B','C','D'],
      ['something.. ','smth else','maasdsf','dgfdgf'],
      ['today','yesterday','aaaaaa','bbbbbb']
    ];
  }


  createTableValues(any: Object){
    
  }

}
