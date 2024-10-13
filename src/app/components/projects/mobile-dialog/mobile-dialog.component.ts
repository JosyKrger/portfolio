import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../project.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mobile-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mobile-dialog.component.html',
  styleUrl: './mobile-dialog.component.scss'
})
export class MobileDialogComponent {

  closeDialogImageSrc: string = '/assets/img/close-dialog.png';
  isDialogOpen = false;
  isMobileView: boolean = false;

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


  @Input() selectedProject: Project | null = null; 
  @Output() dialogClose = new EventEmitter<void>(); 


  getFormattedNumber(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }


  openDialog(index: number) {
    this.selectedProject = this.projectDetails[index];
    this.isDialogOpen = true;
  }


  onHoverCloseDialog(isHovering: boolean): void {
    if (isHovering) {
      this.closeDialogImageSrc = '/assets/img/close-dialog-hover.png';
    } else {
      this.closeDialogImageSrc = '/assets/img/close-dialog.png';
    }
  }


  closeDialog() {
    this.dialogClose.emit();
  }


  showNextProject() {
    if (this.selectedProject) {
      const currentIndex = this.projectDetails.indexOf(this.selectedProject);
      const nextIndex = (currentIndex + 1) % this.projectDetails.length;
      this.selectedProject = this.projectDetails[nextIndex];
    }
  }
}
