import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card implements OnInit {
  @Input() title= '';
  @Input() imageUrl = '';
  @Input() content = '';
  @Input() username = '';

  constructor() {}

  ngOnInit(): void {
    
  }
}
