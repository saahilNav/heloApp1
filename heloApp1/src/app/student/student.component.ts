import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})

export class StudentComponent implements OnInit {
  

  @Output() childOutPt=new EventEmitter();
  @Input() parentdat;
  @Input() parent;
  constructor() { }

  ngOnInit() {
  }
 objects=[{
   id:3,
   name:'sahil',
   class:'msc'
 },
 {
  id:2,
  name:'sharma',
  class:'msc'
}
];

 araay1=[
   
  'Binding the view into the model, which other directives such as input, textarea or select require.',
'Providing validation behavior',
'Keeping the state of the control (valid/invalid, dirty/pristine, touched/untouched, validation errors).',
'Setting related css classes on the element.',
'Registering the control with its parent form.'
 ];

SendDataParent(){
this.childOutPt.emit("hi am Child, this data comng from child");

}
 show:boolean=true;
}
 