import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {

  githubImageSrc: string = 'assets/img/github-icon-green.png';
  linkedinImageSrc: string = 'assets/img/linkedin-icon-green.png';

}