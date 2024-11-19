import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    TranslateModule,
    RouterModule
  ],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {
  constructor(private translate: TranslateService, private router: Router) {
    this.translate.use('en');
  }


  onNavigateToTop(url: string) {
    this.router.navigate([url]).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
