import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottombar',
  templateUrl: './bottombar.component.html',
  styleUrls: ['./bottombar.component.scss']
})
export class BottombarComponent implements OnInit {

  @Input()
  bottomNavs: any = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
