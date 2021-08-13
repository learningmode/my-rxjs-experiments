import {from, Subject} from 'rxjs';

const sub = new Subject<number>();

sub.subscribe({
    next:(x)=>{return console.log(`Observer A:${x}`)}
});

sub.subscribe({
    next:(y)=>{return console.log(`Observer B: ${y}`)}
});

const observable = from([1,2,3,4,5]);
observable.subscribe(sub);