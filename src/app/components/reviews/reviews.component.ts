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
  reviewCount = this.reviews.length;

  nextReview() {
    this.currentIndex = (this.currentIndex + 1) % this.reviewCount;
    this.updateCarousel();
  }

  prevReview() {
    this.currentIndex = (this.currentIndex - 1 + this.reviewCount) % this.reviewCount;
    this.updateCarousel();
  }

  updateCarousel() {
    const reviews = document.querySelectorAll('.review');
    
    reviews.forEach((review, index) => {
      review.classList.remove('active', 'prev-review', 'next-review', 'hidden');
      
      // Set active class to the current index
      if (index === this.currentIndex) {
        review.classList.add('active');
      } 
      // Set previous class to the previous index
      else if (index === (this.currentIndex - 1 + this.reviewCount) % this.reviewCount) {
        review.classList.add('prev-review');
      } 
      // Set next class to the next index
      else if (index === (this.currentIndex + 1) % this.reviewCount) {
        review.classList.add('next-review');
      } 
      // Hide all other reviews
      else {
        review.classList.add('hidden');
      }
    });
  }

  ngAfterViewInit() {
    this.updateCarousel();
  }
}

