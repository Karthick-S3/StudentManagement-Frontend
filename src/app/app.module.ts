import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { FooterComponent } from './footer/footer.component';
import { ShowdetailComponent } from './showdetail/showdetail.component';
import { TopbarComponent } from './topbar/topbar.component';
import { HttpClientModule } from '@angular/common/http';
import { ShowdetailbyidComponent } from './showdetailbyid/showdetailbyid.component';
import { TestComponent } from './test/test.component';
import { EditComponent } from './edit/edit.component';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { StudentshowComponent } from './studentshow/studentshow.component';







@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomescreenComponent,
    FooterComponent,
    ShowdetailComponent,
    TopbarComponent,
    ShowdetailbyidComponent,
    TestComponent,
    EditComponent,
    StudentloginComponent,
    StudentshowComponent

   



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
