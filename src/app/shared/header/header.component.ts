import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';

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

  imageSrc: string = 'assets/img/english.png';
  isGerman: boolean = false; // Zustandsvariable für die Sprache

  // Füge den TranslateService in den Konstruktor ein
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en'); // Standardmäßig Englisch setzen
  }

  // Methode zum Wechseln der Sprache und des Bildes
  translateWebsite() {
    this.isGerman = !this.isGerman; // Toggle zwischen Deutsch und Englisch
    this.imageSrc = this.isGerman ? 'assets/img/german.png' : 'assets/img/english.png'; // Bild wechseln
    const newLang = this.isGerman ? 'de' : 'en'; // Sprache auf Deutsch oder Englisch setzen
    this.translate.use(newLang); // Sprache mithilfe des TranslateService ändern
  }
}
