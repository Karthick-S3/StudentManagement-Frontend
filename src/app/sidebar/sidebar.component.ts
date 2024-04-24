import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('sidebarAnimation', [
      state('void', style({
        transform: 'translateX(-100%)'
      })),
      state('*', style({
        transform: 'translateX(0)'
      })),
      transition('void => *', animate('0.5s ease-in-out')),
      transition('* => void', animate('0.5s ease-in-out'))
    ])
  ]

})
export class SidebarComponent {


  

leftval:number = 20;

  showMee:boolean=true;
  showMe:boolean=false;
  min:boolean = false;
  clsbtn:boolean = false
  toggleTag(){
    if(this.leftval==600){
      this.leftval = 20;
    }else{
      this.leftval = 600;
    }
    
    
  
    this.showMe = !this.showMe
    this.showMee = !this.showMee
    
    if(this.min==true){
      this.min = false;
    }
  }
  
  close(){
    this.min = !this.min
    this.showMe = !this.showMe

  } 
  open(){
    this.showMe = !this.showMe
    this.min = !this.min
  }
  
}
