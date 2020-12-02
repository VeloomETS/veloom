import {Component, HostListener, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import emailjs, {EmailJSResponseStatus} from 'emailjs-com';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-donate-partenaire-dialog',
  templateUrl: './donate-partenaire-dialog.component.html',
  styleUrls: ['./donate-partenaire-dialog.component.css']
})
export class DonatePartenaireDialogComponent implements OnInit {

  nousRejoindreFormGroup: FormGroup
  disableButton = true;
  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar ) {
    this.nousRejoindreFormGroup = this.fb.group({
      contactFormRaison: ['', Validators.required],
      contactFormNom: ['', Validators.required],
      contactFormEmail: ['', Validators.compose([Validators.required, Validators.email])]
    });
  }

  ngOnInit(): void {

  }

  @HostListener('input') oninput() {
    if (this.nousRejoindreFormGroup) {
      if (this.nousRejoindreFormGroup.valid) {
        this.disableButton = false;
      }
    }
  }

  public sendEmail(e: Event) {
    e.preventDefault();

    const parameters = {
      from_name: this.nousRejoindreFormGroup.value.contactFormNom,
      reply_to: this.nousRejoindreFormGroup.value.contactFormEmail,
      message: this.nousRejoindreFormGroup.value.contactFormRaison,
    };

    emailjs.send('service_b6yybyn', 'template_t2v7nhg', parameters, 'user_zYOVpJ0Nq2WXHO0lulvAI')
      .then((result: EmailJSResponseStatus) => {
        this._snackBar.open('Votre message a bien été envoyé.', 'Fermer');
        this.nousRejoindreFormGroup.reset();
      }, (error) => {
        this._snackBar.open('Votre message ne peut être envoyé présentement. Veuillez me contacter directement avec mon adresse courriel.', 'Fermer');
      });
  }



}
