import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  checkboxIsBlank: string = '../../../assets/img/checkbox_blank.png';
  checkboxIsChecked: string = '../../../assets/img/checkbox_checked.png';
  checkboxImage: string = this.checkboxIsBlank;

  toggleCheckbox() {
    if (this.checkboxImage === this.checkboxIsBlank) {
      this.checkboxImage = this.checkboxIsChecked;
    } else {
      this.checkboxImage = this.checkboxIsBlank;
    }
  }
}
