import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  imports: [ CommonModule, FormsModule ],
  templateUrl: './feedback.html',
  styleUrl: './feedback.scss',
})
export class Feedback {

  feedback = {
    name: '',
    email: '',
    message: '',
    rating: 0,
  };

  // UI state
  alertVisible = false;
  alertMessage = '';
  isSubmitting = false;

  // Star selection
  setRating(star: number): void {
    this.feedback.rating = star;
  }

  // Submit feedback form
  submitFeedback(form: NgForm): void {
    if (form.invalid) return;

    this.isSubmitting = true;

    // Simulated async submission
    setTimeout(() => {
      this.isSubmitting = false;
      this.alertVisible = true;
      this.alertMessage = `Thank you, ${this.feedback.name || 'Guest'}! Your feedback has been received.`;

      // Reset form after submit
      form.resetForm();
      this.feedback.rating = 0;

      // Auto-hide alert
      setTimeout(() => (this.alertVisible = false), 4000);
    }, 1000);
  }

  // Modal handler
  openModal(): void {
    const modalElement = document.getElementById('feedbackModal');
    if (modalElement) {
      const bootstrap = (window as any).bootstrap;
      if (bootstrap?.Modal) {
        const modal = new bootstrap.Modal(modalElement);
        modal.show();
      }
    }
  }

}
