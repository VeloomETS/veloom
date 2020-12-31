import {Component, OnInit, ChangeDetectorRef, HostListener} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com'
import { TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  video: HTMLVideoElement;
  nbIntervalFotter: number;
  afficherSymbiose: boolean;
  mobileQuery: MediaQueryList;

  // tslint:disable-next-line:max-line-length
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher ) {
    this.mobileQuery = media.matchMedia('(max-width: 700px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }


  private _mobileQueryListener: () => void;

  ngOnInit() {
    this.afficherSymbiose = false;
    this.video = (document.getElementById('logoVideo') as HTMLVideoElement);
    this.video.addEventListener('playing', function() {
      const intervalVideo = setInterval(() => {
        if (this.currentTime >= 7.5) {
          this.pause();
          this.currentTime = 7.8;
          clearInterval(intervalVideo);
        }
      }, 1000);
    }, false);
    this.nbIntervalFotter = 0;
    const intervalFooter = setInterval(() => {
      this.nbIntervalFotter = this.nbIntervalFotter + 1;
      if (this.nbIntervalFotter === 2) {
        const footerBas = document.getElementById('footerBas');
        footerBas.classList.add('fadein');
      }
      if (this.nbIntervalFotter === 3) {
        const bouttonConteneur = document.getElementById('bouttonConteneur');
        bouttonConteneur.classList.remove('boutton-contenu');
        bouttonConteneur.classList.add('fadein');
        clearInterval(intervalFooter);
      }
    }, 1000);
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy() {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
