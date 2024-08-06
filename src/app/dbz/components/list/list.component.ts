import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
    selector: 'app-dbz-list',
    templateUrl: 'list.component.html'
})

export class ListComponent {
    @Input()
    public characterList: Character[] = [
        {
            name: 'Trunk',
            power: 10
        }
    ];

    @Output()
    public onDeleteCharacter : EventEmitter<number> = new EventEmitter();

    public emitDeleteC (index: number):void{
        console.log({index});
        console.log('imprime en list');
        this.onDeleteCharacter.emit(index);
    } 
}