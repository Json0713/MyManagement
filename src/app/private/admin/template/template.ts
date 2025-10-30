import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Header } from '../../admin/common/header/header';
import { Sidebar } from '../../admin/common/sidebar/sidebar';
import { Footer } from '../../admin/common/footer/footer';

@Component({
  selector: 'app-template',
  imports: [ 
    RouterOutlet,
    RouterModule,
    CommonModule,
    Header,
    Sidebar,
    Footer 
  ],
  templateUrl: './template.html',
  styleUrl: './template.scss',
})
export class Template {

}
