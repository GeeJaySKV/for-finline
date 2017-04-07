import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, GalleryComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }