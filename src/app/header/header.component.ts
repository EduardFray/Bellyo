import { Component, Output, EventEmitter } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';


@Component({
  selector: 'app-header',
  imports: [MatIconModule, MatButtonModule, MatToolbarModule, MatSidenavModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']    
})
export class HeaderComponent {
  @Output() toggleBasket = new EventEmitter<void>();
}

