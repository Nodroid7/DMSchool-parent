import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { ServerService } from '../service/server';
import { AuthService } from '../service/authservice';

import swal from 'sweetalert2';

declare var $;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})

export class IndexComponent implements OnInit {

  @ViewChild('loginModal') public loginModal: ModalDirective;
  @ViewChild('registerModal') public registerModal: ModalDirective;
  @ViewChild('slideshow') slideshow: any;

  constructor(
    public serverService: ServerService,
    public server: ServerService,
    public authService: AuthService,
    public router: Router
  ) { }

  login_email = '';
  login_pwd = '';

  reg_first_name = '';
  reg_last_name = '';
  reg_mobile = '';
  reg_email = '';
  reg_pwd = '';
  reg_conf_pwd = '';

  imageUrlArray = [
    'assets/img/home/slider/slider-1.jpg',
    'assets/img/home/slider/slider-2.jpg',
    'assets/img/home/slider/slider-3.jpg',
    'assets/img/home/slider/slider-4.jpg'
  ];

  ngOnInit() {
    
  }

  moveSlideImg(index){
    this.slideshow.onSlide(index);
  }

  redirectPage(page){
    if(page == 'parent'){
      window.location.href = this.server.parentUrl + page;
    }else if(page == 'manager'){
      window.location.href = this.server.managerUrl + page;
    }
  }


}
