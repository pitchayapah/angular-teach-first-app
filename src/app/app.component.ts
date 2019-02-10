import { Component } from '@angular/core';
import {Card} from './card';
import { from } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cards: Card[] = [];
  get sorted(): Card[]{
    console.log('access');
    return this.cards.sort((a,b) => b.votes - a.votes); //เรียงจากมากไปน้อย
  }
  onclick(firstName:HTMLInputElement,lastName:HTMLInputElement){
    //console.log(firstName.value,lastName.value);
    const card = new Card(firstName.value,lastName.value, 0); //const เปลี่ยนแปลงค่าไม่ได้เเล้ว
    this.cards.push(card);
    console.log(card);
    firstName.value = '';
    lastName.value = '';
    
  }
}
