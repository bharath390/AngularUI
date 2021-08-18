import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-left',
  templateUrl: './nav-left.component.html',
  styleUrls: ['./nav-left.component.css']
})
export class NavLeftComponent implements OnInit {

  Page = {
    title : 'Benefits',
    subPages : {
      title : 'View my letters'
    }
  }


  constructor() {
   }

  ngOnInit(): void {
  }

}
