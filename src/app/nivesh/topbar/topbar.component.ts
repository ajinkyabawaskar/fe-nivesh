import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  @Input()
  isMobile: boolean;

  @Input()
  title: string;

  navItems: any = [
    {
      displayText : 'Log Out',
      link: '/app'
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
