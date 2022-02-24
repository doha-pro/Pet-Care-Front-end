import { Component, OnInit } from '@angular/core';
import { BoardingData } from '../_model/boarding-data';

@Component({
  selector: 'app-boarding-list',
  templateUrl: './boarding-list.component.html',
  styleUrls: ['./boarding-list.component.scss']
})
export class BoardingListComponent implements OnInit {
  listData: BoardingData[] = [
    { 'name': 'karen', 'desc': 'hello karen', 'price': 200, 'phone': '01224104786', 'photo': 'https://picsum.photos/200/300' },
    { 'name': 'karen', 'desc': 'hello karen', 'price': 300, 'phone': '01224104786', 'photo':'https://picsum.photos/200/300' },
     { 'name': 'karen', 'desc': 'hello karen', 'price': 200, 'phone': '01224104786', 'photo': 'https://picsum.photos/200/300' },
    { 'name': 'karen', 'desc': 'hello karen', 'price': 300, 'phone': '01224104786', 'photo':'https://picsum.photos/200/300' },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
