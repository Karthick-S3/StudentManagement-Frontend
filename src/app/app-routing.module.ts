import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { ShowdetailComponent } from './showdetail/showdetail.component';
import { ShowdetailbyidComponent } from './showdetailbyid/showdetailbyid.component';
import { TestComponent } from './test/test.component';
import { EditComponent } from './edit/edit.component';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { StudentshowComponent } from './studentshow/studentshow.component';



const routes: Routes = [
  {
  path: 'home',
 component:HomescreenComponent
  },
  {
    path : 'adddetail',
    component:TestComponent
  },
  {
    path:'showdetail',
    component:ShowdetailComponent
  },
  {
    path:'editdetail/:id',
    component:EditComponent
  },
  {
    path:'showdetailbyid/:id',
    component:ShowdetailbyidComponent
  },
  {
    path:'showdetailbyid',
    component:ShowdetailbyidComponent
  },
  {
    path:'studentlogin',
    component:StudentloginComponent
  },
  {path:'studentshow/:id',
component:StudentshowComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
