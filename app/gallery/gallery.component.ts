import { Component } from '@angular/core';
     
@Component({
    selector: 'gallery',
    templateUrl: `./app/gallery/gallery.component.html`,
    styleUrls:  [`./app/gallery/gallery.component.css`]             
})
export class GalleryComponent { 
     adminGalleryShow = function(){
        document.getElementById('adminGallery').style.display = 'block';
    }
    userGalleryShow = function(){
        document.getElementById('userGallery').style.display = 'block';
    }
}