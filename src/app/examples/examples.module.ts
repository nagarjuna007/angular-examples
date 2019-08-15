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
import { ExamplesHeaderComponent } from './header/header.component';
import { HeroesComponent } from './heros/heros.component';
import { HeroService } from './heros/heros.service';
import { GalleryComponent } from './gallery/gallery.component';
import { NgxGalleryModule } from 'ngx-gallery';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { UnlessDirective } from './better-highlight/unless.directive';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, NgxGalleryModule, HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'examples', component: ExamplesComponent, children: [
          { path: 'home', component: HomeComponent }
        ]
      }
    ])
  ],
  declarations: [ExamplesComponent, HomeComponent, ServersComponent, ServerComponent, TwowaybindingComponent, NgifngforComponent, ExamplesHeaderComponent, FileuploadComponent, HeroesComponent, GalleryComponent, BasicHighlightDirective, BetterHighlightDirective, UnlessDirective],
  providers: [UploadService, HeroService]
})
export class ExamplesModule { }
