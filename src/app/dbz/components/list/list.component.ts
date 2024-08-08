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
    public onDeleteCharacter : EventEmitter<string> = new EventEmitter();

    public emitDeleteC (index ?: string):void{
        if(!index) return;
        this.onDeleteCharacter.emit(index);
    } 
}