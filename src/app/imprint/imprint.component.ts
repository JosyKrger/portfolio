import { Component } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";
import { FooterComponent } from "../shared/footer/footer.component";
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    TranslateModule,
    RouterModule
  ],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
  constructor(private router: Router) { }


  onNavigateToTop(url: string) {
    this.router.navigate([url]).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
