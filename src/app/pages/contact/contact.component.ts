import {ChangeDetectorRef, Component, HostListener, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from "@angular/material/snack-bar";
import {MediaMatcher} from "@angular/cdk/layout";
import emailjs, {EmailJSResponseStatus} from "emailjs-com";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
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

  ngOnInit(): void {
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

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy() {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
