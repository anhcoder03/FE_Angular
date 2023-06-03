import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  sliders = [
    {
      image:
        'https://cdn-v2.didongviet.vn/files/banners/2023/4/24/1/1684911217250_main_824_x_400.jpg',
    },
    {
      image:
        'https://cdn-v2.didongviet.vn/files/banners/2023/4/29/1/1685329557370_824x400_1.png',
    },
    {
      image:
        'https://cdn-v2.didongviet.vn/files/banners/2023/4/26/1/1685062031263_824x400.png',
    },
    {
      image:
        'https://cdn-v2.didongviet.vn/files/banners/2023/4/4/1/1683206296207_824_x_400.png',
    },
  ];
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    navText: ['<', '>'],
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };
}
