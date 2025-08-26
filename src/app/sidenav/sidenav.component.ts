import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  imports: [MatButtonModule, MatSidenavModule],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'] 
})
export class SidenavComponent {

}
