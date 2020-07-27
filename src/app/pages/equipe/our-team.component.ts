import { Component, OnInit } from '@angular/core';
import {InfoVariablesService} from '../../service/info-variables.service';
import {Observable, Observer} from 'rxjs';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css']
})
export class OurTeamComponent implements OnInit {
  memberList: any[];
  isYellow: boolean;
  is_loaded: boolean;

  constructor(private infoVariablesService: InfoVariablesService) {
    this.isYellow = false;
    this.is_loaded = false;
  }

  ngOnInit() {
    this.memberList = [];
    this.infoVariablesService.getInfoMembre().subscribe( response => {
      response.map(item => {
        this.memberList.push({
          nom: item.nom,
          prenom: item.prenom,
          programme: item.programme,
          lien: item.lien,
          titre: item.titre,
        });
      });
      this.is_loaded = true;
    });
  }

  getIsYellow(): boolean {
    this.isYellow = !this.isYellow;
    return this.isYellow;
  }

  getImage(imageUrl) {
    this.getBase64ImageFromURL(imageUrl).subscribe(base64data => {
      console.log(base64data);
      // this is the image as dataUrl
      return'data:image/jpg;base64,' + base64data;
    });
  }


  getBase64ImageFromURL(url: string) {
    return Observable.create((observer: Observer<string>) => {
      // create an image object
      const img = new Image();
      img.crossOrigin = 'Anonymous';
      img.src = url;
      if (!img.complete) {
        // This will call another method that will create image from url
        img.onload = () => {
          observer.next(this.getBase64Image(img));
          observer.complete();
        };
        img.onerror = (err) => {
          observer.error(err);
        };
      } else {
        observer.next(this.getBase64Image(img));
        observer.complete();
      }
    });
  }

  getBase64Image(img: HTMLImageElement) {
    // We create a HTML canvas object that will create a 2d image
    const canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    // Convert the drawn image to Data URL
    const dataURL = canvas.toDataURL('image/png');
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, '');
  }



}
