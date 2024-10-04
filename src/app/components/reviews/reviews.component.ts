import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {

  reviews = [
    {
      quote: "Working with Lukas in a group project was great. He is very cool, focused, and made our project a success. He's super collaborative, and I'd happily work with him again.",
      author: "A. Fischer - Team Partner"
    },
    {
      quote: "Our project benefited enormously from Simon's efficient way of working.",
      author: "T. Schulz - Frontend Developer"
    },
    {
      quote: "Lukas has proven to be a reliable team member with strong technical skills and a proactive approach to the success of our project.",
      author: "J. Doe - Project Manager"
    }
  ];

  currentIndex = 0;

  prevReview() {
    console.log('vorhere Review');
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.reviews.length - 1;
  }

  nextReview() {
    console.log('nächste Review');
    this.currentIndex = (this.currentIndex < this.reviews.length - 1) ? this.currentIndex + 1 : 0;
  }
}

