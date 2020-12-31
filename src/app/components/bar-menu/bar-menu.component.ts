import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-bar-menu',
  templateUrl: './bar-menu.component.html',
  styleUrls: ['./bar-menu.component.css']
})
export class BarMenuComponent implements OnInit {
  mobileQuery: MediaQueryList;
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private translate: TranslateService) {
    this.mobileQuery = media.matchMedia('(max-width: 700px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  private _mobileQueryListener: () => void;

  ngOnInit() {
  }

  switchLang() {
    if(this.translate.currentLang === 'en'){
      this.translate.use('fr');
    } else {
      this.translate.use('en');
    }
  }

}
