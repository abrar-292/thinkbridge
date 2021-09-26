import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MatDrawer} from "@angular/material/sidenav";

@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.scss']
})
export class FullLayoutComponent implements OnInit {
  sidebar: any = true;
  windowSize: any;
  currentUrl = '';
  typesOfNames = [
    {
      name: 'Inventory',
      image: 'assets/images/campaign/Left_Navigation_Sidebar_Home_icon.svg',
      clicked_image: 'assets/images/campaign/Home-clicked.svg'
    },
  ];
  sidebarSize = '180px';
  smallSide = false;
  @ViewChild('drawer') drawer: any;

  constructor(private router: Router,
              private cdr: ChangeDetectorRef,
              private activatedRoute: ActivatedRoute,) {
  }

  ngOnInit() {
    this.windowSize = window.innerWidth < 1199;
    this.cdr.detectChanges();
  }

  change(e: any) {
    this.currentUrl = e.target.innerText;
  }

  sideChange(drawer: MatDrawer) {
    this.sidebar = drawer.opened;
  }

  changeSidebar() {
    this.smallSide = !this.smallSide;
    if (this.smallSide) {
      this.sidebarSize = '60px';
    } else {
      this.sidebarSize = '180px';
    }
  }
}
