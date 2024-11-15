import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [
    HeaderComponent,
    TranslateModule
  ],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {

  githubImageSrc: string = 'assets/img/github-icon-green.png';
  linkedinImageSrc: string = 'assets/img/linkedin-icon-green.png';
  mailImageSrc: string = 'assets/img/mail-icon-green.png';


  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}