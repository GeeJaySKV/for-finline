import { Component } from '@angular/core';
import { GalleryComponent } from './gallery/gallery.component';
     
@Component({
    selector: 'my-app',
    templateUrl: `./app/app.component.html`,
    styleUrls:  [`./app/app.component.css`]             
})
export class AppComponent { 
    guest: string = 'Гость';
    loginInput: any;
    passwordInput: any;
    nickname: string;
    password: string; 
    logIn = function(){
        this.loginInput = document.getElementById('login');
        this.nickname = this.loginInput.value;
        this.passwordInput = document.getElementById('password');
        this.password = this.passwordInput.value;
            if(this.nickname === 'admin' && this.password === 'admin'){
               let temp1: any = document.getElementById('logBtn');
               let temp2: any = document.getElementById('regBtn');
               document.getElementById('nick').style.color = 'red';
               temp1.remove();
               temp2.remove();
               this.loginInput.remove();
               this.passwordInput.remove();
               let temp = new GalleryComponent();
               temp.adminGalleryShow();
                /* Блок админки */ 
            }
            else if(this.nickname === 'admin' && this.password !== 'admin'){
                alert('Проверьте пароль');
                this.nickname = '';
                this.password = '';
            }
            else if(this.nickname === '' || this.password === ''){
                alert('Введите логин и пароль');
                this.nickname = '';
                this.password = '';
            }
            else{
               let temp1: any = document.getElementById('logBtn');
               let temp2: any = document.getElementById('regBtn');
               temp1.remove();
               temp2.remove();
               this.loginInput.remove();
               this.passwordInput.remove();
               let temp = new GalleryComponent();
               temp.userGalleryShow();
                /* Блок юзера */
            }
    }
}