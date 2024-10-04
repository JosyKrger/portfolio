import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { WelcomeComponent } from "../welcome/welcome.component";
import { AboutMeComponent } from "../about-me/about-me.component";
import { TechnologiesComponent } from "../technologies/technologies.component";
import { ProjectsComponent } from "../projects/projects.component";
import { ReviewsComponent } from "../reviews/reviews.component";
import { ContactComponent } from "../contact/contact.component";
import { FooterComponent } from "../../shared/footer/footer.component";

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [HeaderComponent, WelcomeComponent, AboutMeComponent, TechnologiesComponent, ProjectsComponent, ReviewsComponent, ContactComponent, FooterComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
