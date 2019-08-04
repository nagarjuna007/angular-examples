import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from "@angular/router";
import { ExamplesComponent } from './examples.component';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './server/server.component';
import { TwowaybindingComponent } from './twoWayBinding/twowaybinding.component';
import { NgifngforComponent } from './ngifngfor/ngifngfor.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { UploadService } from './fileupload/upload.service';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'examples', component: ExamplesComponent, children: [
          { path: 'home', component: HomeComponent }
        ]
      }
    ])
  ],
  declarations: [ExamplesComponent, HomeComponent, ServersComponent, ServerComponent, TwowaybindingComponent, NgifngforComponent, FileuploadComponent],
  providers: [UploadService]
})
export class ExamplesModule { }
