import { Component, OnInit } from '@angular/core';
import { StudentserviceService } from '../studentservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentlogin',
  templateUrl: './studentlogin.component.html',
  styleUrls: ['./studentlogin.component.scss']
})
export class StudentloginComponent {


  ngOnInit(): void {
    
    
    
      
    const forms = document.querySelectorAll('.needs-validation') as NodeListOf<HTMLFormElement>;
  
    
    Array.from(forms).forEach((form) => {
      form.addEventListener('submit', (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
          alert("Form is not valid. Please fill out all required fields.");
        } else {
          
          this.router.navigate(['/studentshow',this.studentId]);
          
        }
        
        form.classList.add('was-validated');
      }, false);
    });
    
  
}

  


  studentId!: string;
username!: string;
password!: string;
rememberMe!: boolean;

  
  constructor( private router:Router) {
    this.studentId = '';
    this.username = '';
    this.password = '';
    this.rememberMe = false;
  }
  

  submitForm() {
    if (this.studentId && this.username && this.password) {
      // Form is valid, proceed with submission
      console.log('Form submitted');
    } else {
      // Form is invalid, show error message or handle as needed
      console.log('Please fill in all fields');
    }
  }
}
