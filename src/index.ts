import { fromEvent } from "rxjs";
import { throttleTime,tap } from "rxjs";

const scrollPosition = document.getElementById('indication')

const getScrollWidth = () =>{
    const rootElem = document.documentElement;
    const winScroll = rootElem.scrollTop;
    const height = rootElem.scrollHeight - rootElem.clientHeight;

    return (winScroll/height)*100;
} 

const setScroller = ()=>{
    return scrollPosition.style.width = getScrollWidth()+'%'
}

fromEvent(document,'scroll').pipe(throttleTime(20),tap(setScroller)).subscribe();