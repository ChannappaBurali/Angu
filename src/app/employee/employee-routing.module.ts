import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [
    {
        path: 'employee',
        component: EmployeeComponent,
        // children: [
        //     {
        //         path: 'list',
        //         component: EmployeeListComponent
        //     },
        //     {
        //         path: 'detail',
        //         component: EmployeeDetailComponent
        //     }
        // ]
    },
    {
        path: 'employee-list',
        component: EmployeeListComponent
    },
    {
        path: 'employee-detail',
        component: EmployeeDetailComponent
    }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
