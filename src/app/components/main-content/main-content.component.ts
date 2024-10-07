import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { WelcomeComponent } from "../welcome/welcome.component";
import { AboutMeComponent } from "../about-me/about-me.component";
import { TechnologiesComponent } from "../technologies/technologies.component";
import { ProjectsComponent } from "../projects/projects.component";
import { ReviewsComponent } from "../reviews/reviews.component";
import { ContactComponent } from "../contact/contact.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { TranslateConfigModule } from '../../translate-config.module';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent, 
    WelcomeComponent, 
    AboutMeComponent, 
    TechnologiesComponent, 
    ProjectsComponent, 
    ReviewsComponent, 
    ContactComponent, 
    FooterComponent,
    TranslateConfigModule
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

  imageSrc: string = 'assets/img/english.png';
  isGerman: boolean = false;

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }

  changeImage() {
    this.isGerman = !this.isGerman;
    this.imageSrc = this.isGerman ? 'assets/img/german.png' : 'assets/img/english.png';
    this.translate.use(this.isGerman ? 'de' : 'en');
  }

  resetImage() {
    this.imageSrc = this.isGerman ? 'assets/img/german-hover.png' : 'assets/img/english-hover.png';
  }
}

