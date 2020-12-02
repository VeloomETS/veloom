import {Component, OnInit, ChangeDetectorRef, HostListener} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com'

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
  disabledSubmitButton: boolean;
  contactForm: FormGroup;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private fb: FormBuilder, private _snackBar: MatSnackBar ) {
    this.mobileQuery = media.matchMedia('(max-width: 700px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    this.contactForm = fb.group({
      from_name: ['', Validators.required],
      reply_to: ['', Validators.compose([Validators.required, Validators.email])],
      message: ['', Validators.required],
    });
  }


  private _mobileQueryListener: () => void;

  @HostListener('input') oninput() {
    if (this.contactForm) {
      if (this.contactForm.valid) {
        this.disabledSubmitButton = false;
      }
    }
  }

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
      if (this.nbIntervalFotter === 3) {
        const footerBas = document.getElementById('footerBas');
        footerBas.classList.add('fadein');
      }
      if (this.nbIntervalFotter === 4) {
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

  public sendEmail(e: Event) {
    e.preventDefault();

    const parameters = {
      from_name: this.contactForm.value.from_name,
      reply_to: this.contactForm.value.reply_to,
      message: this.contactForm.value.message,
    };

    emailjs.send('service_b6yybyn', 'template_iw09rjl', parameters, 'user_zYOVpJ0Nq2WXHO0lulvAI')
      .then((result: EmailJSResponseStatus) => {
        this._snackBar.open('Votre message a bien été envoyé.', 'Fermer');
        this.contactForm.reset();
      }, (error) => {
        this._snackBar.open('Votre message ne peut être envoyé présentement. Veuillez me contacter directement avec mon adresse courriel.', 'Fermer');
      });
  }
}
