import {Observable,interval} from 'rxjs';

const observable = interval(100);
const observable2 = new Observable((sub)=>{
        sub.next("Hi 1");
        sub.next(2);
        sub.next(3);
        sub.next(4);
        setTimeout(()=>{
            sub.next("The end 6");
        },1000)
});

const subscription1 = observable.subscribe(x=> console.log(x));
const subscription2 =observable2.subscribe(x => console.log(x));

subscription1.add(subscription2);

setTimeout(()=>{
    subscription1.unsubscribe();
},5000)

