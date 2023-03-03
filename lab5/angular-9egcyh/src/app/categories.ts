export interface Category {
    name: string;
    image: string;
    itemsId: number[]
    // url: string;
}

export const categories = [
    {
        name: "Blue items",
        image: 'assets/blue.png',
        itemsId: [1,2,3,4,5]
        // url:''
    },
    {
        name: "Green items",
        image: 'assets/green.png',
        itemsId: [6,7,8,9,10]
        // url:
    },
    {
        name: "Red items",
        image: 'assets/red.png',
        itemsId: [11,12,13,14,15]
        // url:
    },
    {
        name: "Yellow items",
        image: 'assets/yellow.jpg',
        itemsId: [16,17,18,19,20]
        // url:
    }
  ];
  
  
  /*
  Copyright Google LLC. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at https://angular.io/license
  */
