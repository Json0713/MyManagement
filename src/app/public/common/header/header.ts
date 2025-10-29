import { Component } from '@angular/core';

import { RouterModule } from '@angular/router';
import { DateTime } from "../date-time/date-time";

@Component({
  selector: 'app-header',
  imports: [RouterModule, DateTime],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})

export class Header {

}
