import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [
    TranslateModule,
    CommonModule
  ],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss'
})
export class TechnologiesComponent {

  
  skills: { icon: string, description: string }[] = [
    {
      icon: 'assets/img/html-icon.png',
      description: 'HTML'
    },
    {
      icon: 'assets/img/css-icon.png',
      description: 'CSS'
    },
    {
      icon: 'assets/img/javascript-icon.png',
      description: 'JavaScript'
    },
    {
      icon: 'assets/img/material-design-icon.png',
      description: 'Material Design'
    },
    {
      icon: 'assets/img/typescript-icon.png',
      description: 'TypeScript'
    },
    {
      icon: 'assets/img/angular-icon.png',
      description: 'Angular'
    },
    {
      icon: 'assets/img/firebase-icon.png',
      description: 'Firebase'
    },
    {
      icon: 'assets/img/git-icon.png',
      description: 'GIT'
    },
    {
      icon: 'assets/img/rest-api-icon.png',
      description: 'Rest-Api'
    },
    {
      icon: 'assets/img/scrum-icon.png',
      description: 'Scrum'
    },
    {
      icon: 'assets/img/mindset-icon.png',
      description: 'Growth mindset'
    }
  ];
  

  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
