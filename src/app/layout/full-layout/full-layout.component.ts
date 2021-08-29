import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.scss']
})
export class FullLayoutComponent implements OnInit {
  windowSize = false;
  sidebarSize = '220px';

  constructor() { }

  ngOnInit(): void {
  }

}
