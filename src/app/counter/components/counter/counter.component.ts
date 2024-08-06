import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
        <h1>Hola Counter </h1>
        <button (click)="increaseBy(1)">+1</button>
        <button (click)="resetBy(10)">Reset</button>
        <button (click)="increaseBy(-1)">-1</button>
    `
})

export class CounterComponent {
    
    public counter: number = 10;
    increaseBy (value: number): void {
        this.counter += value;
      }
      resetBy (value: number):void{
        this.counter = value;
      }

}