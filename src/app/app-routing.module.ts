import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentTableComponent } from './components/student-table/student-table.component';
import { AddStudentComponent } from './components/add-student/add-student.component';

const routes: Routes = [{ path: '', component: StudentTableComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
