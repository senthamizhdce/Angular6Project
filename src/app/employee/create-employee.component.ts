import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { notStrictEqual } from 'assert';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})

export class CreateEmployeeComponent implements OnInit {

  employeeForm: FormGroup; 
  constructor() { }

  ngOnInit() {
    this.employeeForm = new FormGroup({
      fullName: new FormControl(),
      email: new FormControl(),
      // Create nested form group for skills
      skills: new FormGroup({
        skillName: new FormControl(),
        experienceInYears: new FormControl(),
        proficiency: new FormControl()
      })
    });
  }

  onSubmit(): void {
    console.log(this.employeeForm.value);
    console.log(this.employeeForm); //Check the Log for dirty and more
    console.log(this.employeeForm.get('fullName').value);
    console.log(this.employeeForm.controls.fullName.value);
    console.log(this.employeeForm.controls.skills.value);
    //console.log(this.employeeForm.controls.skills.value.skillName.value);
    console.log(this.employeeForm.controls.skills.value);
  }

  onLoadDataClick(): void {
    this.employeeForm.setValue({
      fullName: 'Pragim Technologies',
      email: 'pragim@pragimtech.com',
      // skills: {
      //   skillName: 'C#',
      //   experienceInYears: 5,
      //   proficiency: 'beginner'
      // }
    });
  }

}



// Notes
// -----
// 1. When working with reactive forms we create instances of FormControl and FormGroup classes to create a form model.
// 2. To bind an HTML <form> tag in the template to the FromGroup instance in the component class, we use formGroup directive
// 3. To bind an  HTML <input> element in the template to the FormControl instance in the component class, we use formControlName directive
// 4. formGroup and formControlName directives are provided by the ReactiveFormsModule
// 5. Both FormControl and FormGroup classes inherit from AbstractControl base class
// 6. The AbstractControl class has properties that help us track both FormControl and FormGroup value and state

// AbstractControl - The following are some of the useful properties provided by the AbstractControl class
// value
// errors
// valid
// invalid
// dirty
// pristine
// touched
// untouched
// setValidators()
// clearValidators()
// updateValueAndValidity()
// setValue()
// patchValue()
// Reset()