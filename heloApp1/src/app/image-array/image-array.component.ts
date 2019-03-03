import { Component, OnInit, ElementRef, Input } from '@angular/core';
// import { IncomingMessage } from 'http';

@Component({
  selector: 'app-image-array',
  templateUrl: './image-array.component.html',
  styleUrls: ['./image-array.component.scss']
})
export class ImageArrayComponent implements OnInit {
  // public imageUrl:any = "https://amazingslider.com/wp-content/uploads/2012/12/dandelion.jpg";


  constructor() { }

  ngOnInit() {
   
  }
  // @Input()  imgs;


  public imageArray:any=[{
  Id:'1',
   imgPath:'',
  name:'sahil',
  surname:'sharma',
}
];
</p>
<div class="acss"  *ngFor="let obj of imageArray">

  <img appImageLoadD  src=' ' alt="imgae"  width="150px" #imgId /> {{obj.name}} {{obj.surname}}{{obj.Id}}

</div>

}
