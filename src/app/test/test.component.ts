import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentserviceService } from '../studentservice.service';
import { Route, Router } from '@angular/router';
import { Student } from '../student';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  

  

  addStudentRequest:Student={
    id:0,
    fullname:'',
    age:0,
    gender:'',
    phonenumber:'',
    emailaddress:'',
    grade:'',
    absence:0,
    tuitionfee:'',
    department:'',
    semester:0,
    parent_name:'',
    parent_contact:'',
    username:'',
    password:'',
    

  }
  constructor(private studentService:StudentserviceService,private router:Router){}


  ngOnInit(): void {
    
    
    
      
      const forms = document.querySelectorAll('.needs-validation') as NodeListOf<HTMLFormElement>;
    
      
      Array.from(forms).forEach((form) => {
        form.addEventListener('submit', (event) => {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
            alert("Form is not valid. Please fill out all required fields.");
          } else {
            this.createStudent(); 
            
          }
          
          form.classList.add('was-validated');
        }, false);
      });
      
    
  }

  
 
  createStudent(){

    this.studentService.addStudent(this.addStudentRequest)
    .subscribe({
      next:(student)=>
      {
        this.router.navigate(['showdetail']);
        console.log(student);
      },
      error:(response)=>
      {
        console.log(response);
      }
    })
  }

    
  

  
}
