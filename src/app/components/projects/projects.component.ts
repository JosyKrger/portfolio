import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MobileDialogComponent } from "./mobile-dialog/mobile-dialog.component";
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Project } from './project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    MobileDialogComponent
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {

  constructor(private breakpointObserver: BreakpointObserver) { }

  showJoinProject: boolean = false;
  showElPolloLocoProject: boolean = false;
  showDaBubbleProject: boolean = false;
  closeDialogImageSrc: string = '/assets/img/close-dialog.png';
  selectedProject: Project | null = null;
  isDialogOpen: boolean = false;
  isMobileView: boolean = false;

  projectDetails: Project[] = [
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
      livetestLink: "",
      imageSrc: "assets/img/join-preview.png"
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
      livetestLink: "",
      imageSrc: "assets/img/el-pollo-loco-preview.png"
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
      livetestLink: "",
      imageSrc: "assets/img/el-pollo-loco-preview.png"
    }
  ];


  openDialog(index: number) {
    this.selectedProject = this.projectDetails[index];
    this.isDialogOpen = true;
}


  ngOnInit(): void {
    this.breakpointObserver.observe([Breakpoints.Handset, '(max-width: 1200px)'])
      .subscribe((result: BreakpointState) => {
        this.isMobileView = result.matches;
      });
  }


  getFormattedNumber(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }


  onHoverCloseDialog(isHovering: boolean): void {
    if (isHovering) {
      this.closeDialogImageSrc = '/assets/img/close-dialog-hover.png';
    } else {
      this.closeDialogImageSrc = '/assets/img/close-dialog.png';
    }
  }


  closeDialog() {
    this.isDialogOpen = false;
    this.selectedProject = null;
  }


  showNextProject() {
    if (this.selectedProject) {
      let currentIndex = this.projectDetails.indexOf(this.selectedProject);
      let nextIndex = (currentIndex + 1) % this.projectDetails.length;
      this.selectedProject = this.projectDetails[nextIndex];
    }
  }
}

