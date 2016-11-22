import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-me',
  templateUrl: './click-me.component.html',
  styleUrls: ['./click-me.component.css']
})
export class ClickMeComponent implements OnInit {

// Declare and initalise a string
clickMessage: string = "";

// This method handles the button click
  constructor() { }
 // Set the message
  onClickMe() { 
    this.clickMessage = "You clicked the button!";
  }
  ngOnInit() {
  }

}

}
