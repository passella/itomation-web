import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FooterComponent} from './core/components/footer/footer.component';
import {HeaderComponent} from './core/components/header/header.component';
import {MainComponent} from './core/components/main/main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
