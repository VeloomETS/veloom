import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {BarMenuComponent} from './components/bar-menu/bar-menu.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { TestComponent } from './pages/test/test.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { OurTeamComponent } from './pages/equipe/our-team.component';
import { ProjetComponent } from './pages/projet/projet.component';
import { CompetitionsComponent } from './pages/competitions/competitions.component';
import { InfoVariablesService} from './service/info-variables.service';
import { CommonModule } from '@angular/common';
import { NouisliderModule } from 'ng2-nouislider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { PartenairesComponent } from './pages/partenaires/partenaires.component';
import { GalerieComponent } from './pages/galerie/galerie.component';
import { FooterComponent } from './components/footer/footer.component';
import { DonatePartenaireDialogComponent } from './components/donate-partenaire-dialog/donate-partenaire-dialog.component';
import { LogoScrollerComponent } from './components/logo-scroller/logo-scroller.component';
import { IvyCarouselModule} from 'angular-responsive-carousel';
import { LightboxModule } from 'ngx-lightbox';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import { ContactComponent } from './pages/contact/contact.component';
import {FacebookPluginComponent} from "./components/facebook-plugin/facebook-plugin.component";

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomePageComponent },
      { path: 'accueil', component: HomePageComponent },
      { path: 'equipe', component: OurTeamComponent },
      { path: 'projet', component: ProjetComponent },
      { path: 'competitions', component: CompetitionsComponent },
      { path: 'galerie', component: GalerieComponent },
      { path: 'partenaires', component: PartenairesComponent },
    ]),
    IvyCarouselModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    RouterModule,
    CommonModule,
    FormsModule,
    NgbModule,
    NouisliderModule,
    JwBootstrapSwitchNg2Module,
    LightboxModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
    declarations: [
        AppComponent,
        BarMenuComponent,
        TestComponent,
        HomePageComponent,
        OurTeamComponent,
        ProjetComponent,
        CompetitionsComponent,
        PartenairesComponent,
        GalerieComponent,
        FooterComponent,
        DonatePartenaireDialogComponent,
        LogoScrollerComponent,
        ContactComponent,
        FacebookPluginComponent,
    ],
  providers: [
    InfoVariablesService
  ],

  bootstrap: [AppComponent]
})
export class AppModule {
}
// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
