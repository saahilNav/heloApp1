import { Directive, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Directive({
  selector: '[appImageLoadD]'
})
export class ImageLoadDDirective {
  public imageUrl:any ="https://amazingslider.com/wp-content/uploads/2012/12/dandelion.jpg";

  constructor(private http:HttpClient,private el:ElementRef) { 
    // (this.el.nativeElement as HTMLImageElement).setAttribute('src',this.imageUrl);
      let im = this.el.nativeElement;
     im.src=this.getUrl();
  }


 getUrl(){
 return this.http.get(this.imageUrl).subscribe(data =>{

  console.log(data);

 });
 }

 public imageArray:any=[{
  Id:'1',
   imgPath:'',
  name:'sahil',
  surname:'sharma',
}
];
}