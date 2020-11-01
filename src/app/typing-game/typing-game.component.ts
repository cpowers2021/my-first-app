import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typing-game',
  templateUrl: './typing-game.component.html',
  styleUrls: ['./typing-game.component.css']
})
export class TypingGameComponent implements OnInit {
typingGameWord = 'hello';
typingGameInput = '';
allowNewServer = true;
  constructor() {

  }

  ngOnInit(): void {

  }
  onClick() {
    if(this.typingGameInput==this.typingGameWord) {
    this.allowNewServer = false;
    }
  }

}
