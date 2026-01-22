import { Component, inject } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  isLoading: boolean = false;
  private readonly router = inject(Router); // function injection

  registerForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*\d).{8,}$/)]), // min 8 chars + 1 uppercase + 1 number
    repeatPassword: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*\d).{8,}$/)]),
    address: new FormGroup({
      city: new FormControl(null, [Validators.required]),
      streetName: new FormControl(null, [Validators.required]),
      buildNumber: new FormControl(null, [Validators.required])
    }),
    employees: new FormArray([])
  },
  {
    validators: [this.passwordMatch] // custom validation
  })

  constructor(){
    this.addEmployee();
  }

  // form array 
  get employees(): FormArray {
    return this.registerForm.get('employees') as FormArray;
  }
  addEmployee(){
    let newEmployeeGroup = new FormGroup({
      empName: new FormControl(null, [Validators.required]),
      empNumber: new FormControl(null, [Validators.required])
    });
    this.employees.push(newEmployeeGroup);
  }
  removeEmployee(index: number){
    if(this.employees.length === 1) return;
    this.employees.removeAt(index);
  }

  handleSubmit(){
    this.isLoading = true;

    setTimeout(() => {
      if(this.registerForm.valid){
        console.log("111111", this.registerForm.value);
        // this.router.navigate(["/home"]);
      }
      else {
        this.registerForm.markAllAsTouched();
      }
      this.isLoading = false;
    }, 1000)
  }

  resetForm() {
    this.registerForm.reset();
  }


  passwordMatch(group: AbstractControl){
    let password = group.get('password')?.value;
    let repeatPassword = group.get('repeatPassword')?.value;

    return password === repeatPassword ? null : {mismatch: true};
  }
}
