// import * as dat from "dat.gui";
import GUI from 'lil-gui';


export default class Controls{
    constructor(params){
        console.log('Controls', params);
        
        this.params = params;
        this.init();
    }

    init(){
        this.gui = new GUI({width: 300});
        this.gui.add(this.params, "mouse_force", 20, 200);
        this.gui.add(this.params, "cursor_size", 10, 200);
        this.gui.add(this.params, "isViscous");
        this.gui.add(this.params, "viscous", 0, 500);
        this.gui.add(this.params, "iterations_viscous", 1, 32);
        this.gui.add(this.params, "iterations_poisson", 1, 32);
        this.gui.add(this.params, "dt", 1/200, 1/30);
        this.gui.add(this.params, 'BFECC');
        
        // 色の設定
        const colorFolder = this.gui.addFolder('Colors');
        colorFolder.addColor(this.params, 'baseColor').name('Background Color');
        colorFolder.addColor(this.params, 'smokeColor').name('Smoke Color');
        colorFolder.add(this.params, 'intensity', 0, 2).name('Intensity');
        
        this.gui.close();
    }

}