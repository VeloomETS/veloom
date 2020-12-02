import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MediaMatcher} from '@angular/cdk/layout';
import {DonatePartenaireDialogComponent} from "../../components/donate-partenaire-dialog/donate-partenaire-dialog.component";

@Component({
  selector: 'app-partenaires',
  templateUrl: './partenaires.component.html',
  styleUrls: ['./partenaires.component.css']
})
export class PartenairesComponent implements OnInit {
  User = {
    name: 'Francisco',
    donationCollect: 6000,
    donationGoal: 42892,
  };
  mobileQuery: MediaQueryList;
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public dialog: MatDialog) {
    this.mobileQuery = media.matchMedia('(max-width: 700px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  private _mobileQueryListener: () => void;

  ngOnInit() {
    const donationProgress = document.getElementById('donation--progress');
    const donationNumber = document.getElementById('donation--number');
    const donationGoal = document.getElementById('donation--goal');
    const donationStatus = document.getElementById('donation--status');
    const donationAmount = document.getElementById('donation--amount');
    const donate = document.getElementById('donate');

    // How much percent to reach Goal
    const percent = this.percentage(this.User.donationCollect, this.User.donationGoal);
    // What we have so far to reach Goal
    donationProgress.setAttribute('aria-valuenow', this.User.donationCollect.toString());
    // Goal
    donationProgress.setAttribute('aria-valuemax', this.User.donationGoal.toString());
    donationProgress.setAttribute('style', 'width:' + percent + '%');
    donationNumber.setAttribute('style', 'left:' + percent + '%');
    donationNumber.innerHTML = this.User.donationCollect + '$';
    donationGoal.innerHTML = this.User.donationGoal  + '$';
    // tslint:disable-next-line:max-line-length
    donationStatus.innerHTML = 'Nous avons besoins de <span class=\'red\'>$' + (this.User.donationGoal - this.User.donationCollect) + '</span> pour atteindre notre objectif';
  }

  // Function to find percentage
  percentage(a, b): number {
    return a / b * 100 > 100 ? 100 : a / b * 100;
  }

  openDialog() {
    const dialogRef = this.dialog.open(DonatePartenaireDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

