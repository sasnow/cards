import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Card } from './card/card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Card, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  posts = [
    { title: 'Neat Tree',
      imageUrl: 'assets/tree.jpeg',
      username: 'nature',
      content: 'I saw this neat tree today'
    },
    { title: 'Snowy Mountain',
      imageUrl: 'assets/mountain.jpeg',
      username: 'mountainlover',
      content: 'Here is a picture of a snowy mountain'
    },
    { title: 'Mountain Biking',
      imageUrl: 'assets/biking.jpeg',
      username: '@biking12222',
      content: 'I did some biking today'
    },
    { title: 'Mountain Biking',
      imageUrl: 'assets/biking.jpeg',
      username: '@biking12222',
      content: 'I did some biking today'
    }
  ]
}
