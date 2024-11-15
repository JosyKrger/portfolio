import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() languageChange = new EventEmitter<string>();

  imageSrc: string = 'assets/img/english.png';
  isGerman: boolean = false;
  isMenuOpen: boolean = false; 


  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }


  navigateToHome() {
    this.router.navigate(['/']);
  }

 
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; 
  }


  constructor(private translate: TranslateService, private router: Router) {
    this.translate.setDefaultLang('en');
  }


  translateWebsite() {
    this.isGerman = !this.isGerman; 
    let newLang = this.isGerman ? 'de' : 'en'; 
    this.translate.use(newLang); 
    this.updateImage(); 
  }


  updateImage() {
    this.imageSrc = this.isGerman ? 'assets/img/german.png' : 'assets/img/english.png';
  }


  onMouseOver() {
    this.imageSrc = this.isGerman ? 'assets/img/german-hover.png' : 'assets/img/english-hover.png';
  }


  onMouseOut() {
    this.updateImage();
  }
}
