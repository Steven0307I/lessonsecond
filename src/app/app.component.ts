import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'lessonsecond';
  clickedTitle = '';
  clickedSubtitle = '';
  carts = [
    {
      title: 'What is Angular?',
      subtitle: 'Get high-level overview of the Angular platfrom.',
      footer: 'Platform overview',
    },
    {
      title: 'Getting Started ',
      subtitle:
        'Examine and work with a small ready-make  Angular app, without any setup',
      footer: 'Try it now',
    },
    {
      title: 'Learn and Explore',
      subtitle:
        'Learn about the fundametal design concepts and architecture of Angular apps',
      footer: 'Introduction to Angular consepts',
    },
    {
      title: 'Set up your environment',
      subtitle:
        'Set up your local environement for development with the Angular CLI ',
      footer: ' Local setup',
    },
  ];
  log(value: { title: string; subtitle: string }) {
    this.clickedTitle = value.title;
    this.clickedSubtitle = value.subtitle;
  }
}
