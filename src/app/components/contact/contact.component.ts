import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
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


  http = inject(HttpClient);


  toggleCheckbox() {
    this.isCheckboxChecked = !this.isCheckboxChecked;
    this.checkboxImage = this.isCheckboxChecked ? this.checkboxIsChecked : this.checkboxIsBlank;
  }


  checkField(input: any) {
    if (input.invalid && input.touched) {
      console.error(`The field ${input.name} is invalid.`);
    }
  }


  mailTest = false;


  post = {
    endPoint: 'https://josy-krueger.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };


  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            console.log(this.post.endPoint, this.post.body(this.contactData));
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      console.log(this.post.endPoint, this.post.body(this.contactData), "test");
      ngForm.resetForm();
    }
  }
}