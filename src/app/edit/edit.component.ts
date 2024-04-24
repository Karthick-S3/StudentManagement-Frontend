import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentserviceService } from '../studentservice.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Student } from '../student';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})




export class EditComponent implements OnInit {


  

  studentDetail: Student = {
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
    password:''
  }
  constructor(private route:ActivatedRoute, private studentService:StudentserviceService,private router:Router){}


  ngOnInit(): void {
    

    this.route.paramMap.subscribe({
      next:(params) => {
         const id = params.get('id');

        if(id){
        this.studentService.getStudentById(Number(id)).subscribe({
         next: (response) => {
          this.studentDetail = response;
          console.log(response);
          }
        })
        }
      }
    })
    
    
      
      const forms = document.querySelectorAll('.needs-validation') as NodeListOf<HTMLFormElement>;
    
      
      Array.from(forms).forEach((form) => {
        form.addEventListener('submit', (event) => {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
            alert("Form is not valid. Please fill out all required fields.");
          } else {
            this.updateStudent(); 
            
          }
          
          form.classList.add('was-validated');
        }, false);
      });
      
    
  }

  
  updateStudent(){
    this.studentService.updateStudent(this.studentDetail.id,this.studentDetail).subscribe({
      next:(responce)=>{
        this.router.navigate(['showdetail']);
        console.log(responce);
      },
      error:(responce)=>{
        console.log(responce);
      }
    });
}
    
  
}
