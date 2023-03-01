
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  url: string;
  rating: number;
  likes: number;
}

export const products = [
  {
    id: 1,
    name: 'Phone 13',
    price: 799,
    image: 'assets/iphone.png',
    description: 'A large phone with one of the best screens',
    url: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-sinii-102298364/?c=750000000#!/item',
    rating: 3,
    likes: 3
  },
  {
    id: 2,
    name: 'Logitec mouse',
    price: 699,
    image: 'assets/mouse.png',
    description: 'A great mouse',
    url: 'https://www.technodom.kz/p/myshka-igrovaya-provodnaya-usb-logitech-g102-lightsync-blue-235359?utm_source=google&utm_medium=cpc&utm_term=&utm_campaign=PMax-google-search-smartshopping-feed-td-dm-all-categories-kz&gclid=CjwKCAiA9NGfBhBvEiwAq5vSyxf0xMkDnElGIc2rj9hrdJR5x3y1hU6vIfokF11rkeCn-nDc8in_-hoCWm0QAvD_BwE',
    rating: 5,
    likes: 3
  },
  {
    id: 3,
    name: 'Backpack',
    price: 299,
    image: 'assets/backpack.png',
    description: 'Fjällräven Kånken Classic Backpack Deep Turquoise',
    url: 'https://www.myfoxbag.com/products/fjallraven-kanken-classic-backpack-deep-turquoise',
    rating: 4,
    likes: 3
  },
  {
    id: 4,
    name: 'Puma kicks',
    price: 799,
    image: 'assets/kicks.png',
    description: 'A large puma with one of the best screens',
    url: 'https://www.farfetch.com/kz/shopping/men/puma-mb02-lunar-new-year-lamelo-ball-item-19732445.aspx?size=25&storeid=11218&utm_source=google&utm_medium=cpc&utm_keywordid=&utm_shoppingproductid=19732445-25&pid=google_search&af_channel=Search&c=19615332193&af_c_id=19615332193&af_siteid=&af_keywords=pla-293946777986&af_adset_id=154063330228&af_ad_id=646125462909&af_sub1=&af_sub5=19732445-25&is_retargeting=true&shopping=yes&gclid=CjwKCAiA9NGfBhBvEiwAq5vSy6QiBDU9vQ_hdNMwOC_7mvwOB0151EhqA5Drf03w0NtzV4EW6Yj5fhoC3jQQAvD_BwE',
    rating: 3,
    likes: 3
  },
  {
    id: 5,
    name: 'Vacuum Cleaner',
    price: 699,
    image: 'assets/vacum.png',
    description: 'A great vacum with one of the best nasos',
    url: 'https://www.sulpak.kz/g/piylecos_tefal_bagless_tw7272ea_24_769?gclid=CjwKCAiA9NGfBhBvEiwAq5vSyz5lsrMV1idslW0iFLpDo8gUaOrtNoJObKoHhqqJK-qm6fpcQhzwIBoCD7IQAvD_BwE',
    rating:5,
    likes: 3
  },
  {
    id: 6,
    name: 'Car lamba',
    price: 99999,
    image: 'assets/car.jpg',
    description: 'cool car fast very very',
    url: 'https://www.motortrend.com/news/lynk-co-03-cyan-edition-revealed',
    rating:4,
    likes: 3
  },
  {
    id: 7,
    name: 'ball puma cyan',
    price: 799,
    image: 'assets/ball.png',
    description: 'A large ball cool',
    url: 'https://soccerzone.com/dh9796-410-pitch-team-ball-cyan/',
    rating:5,
    likes: 3
  },
  {
    id: 8,
    name: 'Memory disc',
    price: 699,
    image: 'assets/netac.png',
    description: 'A great memory disc with one of the best cameras',
    url: 'https://kaspi.kz/shop/p/netac-microsdhc-p500stn-032g-32gb-100783155/?c=750000000#!/item',
    rating:2,
    likes: 3
  },
  {
    id: 9,
    name: 'Cozy chair',
    price: 299,
    image: 'assets/chair.jpg',
    description: 'very cozy chair',
    url: 'https://www.pamono.eu/cyan-marshmallow-chair-by-royal-stranger',
    rating:3,
    likes: 3
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/