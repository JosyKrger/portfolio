import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  contactData = {
    name: "",
    email: "",
    message: ""
  }

  checkboxIsBlank: string = 'assets/img/checkbox_blank.png';
  checkboxIsChecked: string = 'assets/img/checkbox_checked.png';
  checkboxImage: string = this.checkboxIsBlank;
  isCheckboxChecked: boolean = false;
  checkboxError: boolean = false;


  constructor(private http: HttpClient) {}


  toggleCheckbox() {
    this.isCheckboxChecked = !this.isCheckboxChecked;
    this.checkboxImage = this.isCheckboxChecked ? this.checkboxIsChecked : this.checkboxIsBlank;
  }

  
  mailTest = true;


  checkField(input: any) {
    if (input.invalid && input.touched) {
      console.error(`The field ${input.name} is invalid.`);
    }
  }


  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    this.checkboxError = false;
    if (!this.isCheckboxChecked) {
      this.checkboxError = true; 
      return;
    }
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response: any) => {
            if (response.status === 'success') {
              ngForm.resetForm();
              this.isCheckboxChecked = false;
              this.checkboxImage = this.checkboxIsBlank;
            } else {
              console.error('Error:', response.message);
            }
          },
          error: (error) => {
            console.error('Error sending email:', error);
          },
          complete: () => console.info('Post request complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
      this.isCheckboxChecked = false;
      this.checkboxImage = this.checkboxIsBlank; 
    }
  }
}
