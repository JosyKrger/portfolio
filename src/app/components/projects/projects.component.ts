import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  showJoinProject: boolean = false;
  showElPolloLocoProject: boolean = false;
  showDaBubbleProject: boolean = false;

  projectDetails = [
    {
      number: 1,
      title: "Join",
      description: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
      technologies: [
        {
          icon: "/assets/img/html-icon-green.png",
          name: "HTML"
        },
        {
          icon: "/assets/img/css-icon-green.png",
          name: "CSS"
        },
        {
          icon: "/assets/img/javascript-icon-green.png",
          name: "JavaScript"
        },
        {
          icon: "/assets/img/firebase-icon-green.png",
          name: "Firebase"
        }
      ],
      githubLink: "",
      livetestLink: ""
    },
    {
      number: 2,
      title: "El Pollo Loco",
      description: "Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.",
      technologies: [
        {
          icon: "/assets/img/html-icon-green.png",
          name: "HTML"
        },
        {
          icon: "/assets/img/css-icon-green.png",
          name: "CSS"
        },
        {
          icon: "/assets/img/javascript-icon-green.png",
          name: "JavaScript"
        }
      ],
      githubLink: "",
      livetestLink: ""
    },
    {
      number: 3,
      title: "DABubble",
      description: "This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.",
      technologies: [
        {
          icon: "/assets/img/html-icon-green.png",
          name: "HTML"
        },
        {
          icon: "/assets/img/css-icon-green.png",
          name: "CSS"
        },
        {
          icon: "/assets/img/typescript-icon-green.png",
          name: "TypeScript"
        },
        {
          icon: "/assets/img/angular-icon-green.png",
          name: "Angular"
        },
        {
          icon: "/assets/img/firebase-icon-green.png",
          name: "Firebase"
        }
      ],
      githubLink: "",
      livetestLink: ""
    }
  ];
}

