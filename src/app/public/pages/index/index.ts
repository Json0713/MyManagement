import { Component, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { Feedback } from "./feedback/feedback";

@Component({
  selector: 'app-index',
  imports: [Feedback],
  templateUrl: './index.html',
  styleUrl: './index.scss',
})
export class Index implements AfterViewInit {

  features = [
    {
      icon: 'bi bi-list-check',
      title: 'Task Progress',
      desc: 'Track your tasks, goals, and achievements stay organized every day.',
    },
    {
      icon: 'bi bi-clipboard-data',
      title: 'Analytics',
      desc: 'Visualize your productivity and monitor personal growth with insight.',
    },
    {
      icon: 'bi bi-wallet2',
      title: 'Financial Manager',
      desc: 'Manage income, expenses, and savings all in one simple place.',
    },
    {
      icon: 'bi bi-calendar4-week',
      title: 'Scheduling',
      desc: 'Plan and balance daily routines, focus on what truly matters most.',
    },
  ];

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const elements = this.el.nativeElement.querySelectorAll('[data-reveal]');
    elements.forEach((el: HTMLElement, index: number) => {
      setTimeout(() => {
        this.renderer.addClass(el, 'fade-up');
      }, index * 100);
    });
  }

}
