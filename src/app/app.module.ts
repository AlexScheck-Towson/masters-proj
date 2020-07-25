import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainService } from './services/main.service';
import { HomeComponent } from './component/home/home.component';
import { PassComponent } from './component/pass/pass.component';
import { LearningObjComponent } from './component/learning-obj/learning-obj.component';
import { ExecutingScriptDialogComponent } from './component/executing-script-dialog/executing-script-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PassComponent,
    LearningObjComponent,
    ExecutingScriptDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatSliderModule,
    MatInputModule,
    MatGridListModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
