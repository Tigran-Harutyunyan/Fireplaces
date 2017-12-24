import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
@Component({selector: 'ng-header', templateUrl: './Header.component.html'})

export class HeaderComponent implements OnInit {
    constructor(private router: Router) {}

    public isMenuVisible : boolean = false; 
    public closeMenu() {
        this.isMenuVisible = false;
      
    }
    public toggleMenu(){
        this.isMenuVisible = !this.isMenuVisible; 
    }
    ngOnInit() {
      /*   var menuToggler = $('#toggleMobileMEnu'),
            overlay = $('#overlay'),
            backdrop = $('.backdrop');
 */
        // ============= MOBILE DROPDOWN =================
    /*     menuToggler.click(function () {
            $(this).toggleClass('active');
            overlay.toggleClass('open');
           
        });

        $('.overlay-menu a').click(function () {
            closeMenu();
        }); */
    };
}
