import {Observable} from 'rxjs';

const observable = new Observable((dat)=>{
    dat.next(1);
    dat.next(2);
    dat.next(3);
    setTimeout(()=>{
        dat.next(4);
        dat.complete();
    },1000);
});

console.log('just before subscribe');

observable.subscribe({
    next(x){console.log('got value ' + x); },
    error(err) { console.error('something wrong occurred: ' + err); },
    complete() { console.log('done');}
});


