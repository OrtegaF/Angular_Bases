import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent{
    public characters: Character[] = [
        {
        name: 'Krillin',
        power: 1000},
        {
        name: 'Goku',
        power: 9500,
        },
        {
        name: 'Vegeta',
        power: 15000,
        }
    ];

    onNewCharacter(character:Character):void{
          this.characters.push(character);
    }

    onDeletecharacter (index:number ):void{
        console.log(index);
        console.log('imprime en la main');
        this.characters.splice(index);
    }
}