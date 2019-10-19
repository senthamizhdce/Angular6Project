//import { CommonModule } from '@angular/common'; - not required in router module
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CreateEmployeeComponent } from './employee/create-employee.component';
import { ListEmployeesComponent } from './employee/list-employees.component';

const appRoutes: Routes = [
  { path: 'list', component: ListEmployeesComponent },
  { path: 'create', component: CreateEmployeeComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];

// Pass the configured routes to the forRoot() method
// to let the angular router know about our routes
// Export the imported RouterModule so router directives
// are available to the module that imports this AppRoutingModule
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
    //CommonModule - Not required in router module
  ],
  exports:[RouterModule]
  //declarations: [] - Not required in router module
})
export class AppRoutingModule { }
