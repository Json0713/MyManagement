import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';

import { Header} from '../common/header/header';
import { Footer} from '../common/footer/footer';

@Component({
  selector: 'app-template',
  imports: [ 
    Header,
    Footer,
    RouterOutlet,
    CommonModule,
    RouterModule 
  ],
  templateUrl: './template.html',
  styleUrl: './template.scss',
})
export class Template {

}
