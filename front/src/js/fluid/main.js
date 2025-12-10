import EventBus from "./utils/EventBus";
window.EventBus = EventBus;
import WebGL from "./modules/WebGL";


if(!window.isDev) window.isDev = false;

export function init (){
    console.log('main.js');


    const elm = document.querySelector('.fluid');
    if(!elm) return;
    
    const webglMng = new WebGL({
        $wrapper: elm
    });
}
