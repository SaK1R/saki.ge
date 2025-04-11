import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { log } from 'console';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})


export class HeaderComponent {
  haderTitle: string = 'SaKi';
  headerNavigation = [
    { label: 'Home', url: '/' },
    { label: 'About', url: '/about' },
    { label: 'Projects', url: '/projects' },
    { label: 'Contact', url: '/contact' }
  ];

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  
    if (this.isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }
  
  closeMenu() {
    this.isMenuOpen = false;
    document.body.classList.remove('no-scroll');
  }
}