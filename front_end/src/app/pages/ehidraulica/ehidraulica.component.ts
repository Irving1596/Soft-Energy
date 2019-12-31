import { Component, OnInit, HostListener } from '@angular/core';
@Component({
  selector: 'app-ehidraulica',
  templateUrl: './ehidraulica.component.html',
  styleUrls: ['./ehidraulica.component.scss']
})
export class EhidraulicaComponent implements OnInit {

  CAROUSEL_BREAKPOINT = 768;
  carouselDisplayMode = 'multiple';

  cards = [
    {
      title: 'Concepto',
      description: 'La energía hidroeléctrica es aquella que se genera al transformar la fuerza del agua en energía eléctrica.',
      buttonText: 'Leer Más',
      img: 'assets/img/hidro_concepto.jpg',
      ref: '#'
    },
    {
      title: 'Hidroeléctrica Bayano',
      description: 'Ubicada a 80 km de la ciudad de Panamá, esta planta hidroeléctrica aprovecha las aguas del río Bayano.',
      buttonText: 'Leer Más',
      img: 'assets/img/hidro_bayano.jpg',
      ref: '/ehidraulicabayano'
    },
    {
      title: 'Hidroeléctrica Fortuna ',
      description: 'La planta hidroeléctrica Fortuna, también conocidad como Central Edwin Fábrega,es una hidroeléctrica con embalse y está ubicada la provincia de Chiriquí.',
      buttonText: 'Leer Más',
      img: 'assets/img/hidro_fortuna.jpg',
      ref: '#'
    },
    {
      title: 'Card Title 4',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      ref: '#'
    },
    {
      title: 'Card Title 5',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      ref: '#'
    },
    {
      title: 'Card Title 6',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      ref: '#'
    },
    {
      title: 'Card Title 7',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      ref: '#'
    },
    {
      title: 'Card Title 8',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      ref: '#'
    },
    {
      title: 'Card Title 9',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      ref: '#'
    },
  ];
  slides: any = [[]];
  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  ngOnInit() {
    this.slides = this.chunk(this.cards, 3);

    if (window.innerWidth <= this.CAROUSEL_BREAKPOINT) {
      this.carouselDisplayMode = 'single';
    } else {
      this.carouselDisplayMode = 'multiple';
    }
  }

  @HostListener('window:resize')
  onWindowResize() {
    if (window.innerWidth <= this.CAROUSEL_BREAKPOINT) {
      this.carouselDisplayMode = 'single';
    } else {
      this.carouselDisplayMode = 'multiple';
    }
  }
}
