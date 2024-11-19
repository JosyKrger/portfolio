import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    TranslateModule,
    RouterModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  constructor(public router: Router) { }

  onNavigateToTop(url: string) {
    this.router.navigate([url]).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
