import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  

  username:string = "Chero";
  password:string = "chero@123";

  width:number = 100;
  height:number = 100;
  duration: number = 2000;
  interval: number = 1;

  


  wrong:boolean = false;
  constructor(private router: Router) { }
  login(x:string,y:string): void {
    if(x===this.username && y===this.password){
      this.flag2 = false;
      this.flag3=true;
      const steps = Math.floor(this.duration / this.interval); // calculate total animation steps

    for (let i = 0; i < steps; i++) {
      setTimeout(() => {
        this.width += 3; 
        this.height +=3;// increase width by 50px
      }, i * this.interval);
    }
      setTimeout(() => {
        
        this.flag3 = false;
        this.router.navigateByUrl('/home');
        this.flag = true;
      }, 2000);
      
      

    }else{
      this.wrong=true;
    } 
  }


  title = 'Dashboard';
  flag:boolean =false;
  flag2:boolean = true;
  flag3:boolean = false;
  studentpage:boolean = false;
  

  stu(){
    this.flag = false;
    this.flag2 = false;
    this.flag3 = false;
    this.studentpage = true
    this.router.navigateByUrl('/studentlogin');
  }
  
  
  
}
