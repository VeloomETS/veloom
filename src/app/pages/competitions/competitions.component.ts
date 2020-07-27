import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  // tslint:disable-next-line:max-line-length
  styleUrls: ['./competitions.component.css']
})
export class CompetitionsComponent implements OnInit {
  mobileQuery: MediaQueryList;
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 700px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  private _mobileQueryListener: () => void;

  ngOnInit() {
  }

  get_background(mobile): string{
    return 'url(https://drive.google.com/uc?id=1vliUNPYvIeLwAXLqRk4NksZoX6I0ZkvQ)';
  }
}
