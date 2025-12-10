import Common from "./Common";
import * as THREE from "three";

import Simulation from "./Simulation";
import face_vert from "./glsl/sim/face.vert";
import color_frag from "./glsl/sim/color.frag";


export default class Output{
    constructor(){
        this.init();
    }

    init(){
        console.log('Output');
        
        this.simulation = new Simulation();

        this.scene = new THREE.Scene();
        this.camera = new THREE.Camera();

        this.output = new THREE.Mesh(
            new THREE.PlaneGeometry(2, 2),
            new THREE.RawShaderMaterial({
                vertexShader: face_vert,
                fragmentShader: color_frag,
                uniforms: {
                    velocity: {
                        value: this.simulation.fbos.vel_0.texture
                    },
                    boundarySpace: {
                        value: new THREE.Vector2()
                    },
                    baseColor: {
                        value: new THREE.Color()
                    },
                    smokeColor: {
                        value: new THREE.Color()
                    },
                    intensity: {
                        value: 0.8
                    }
                },
            })
        );

        this.scene.add(this.output);
    }
    addScene(mesh){
        this.scene.add(mesh);
    }

    resize(){
        this.simulation.resize();
    }

    render(){
        Common.renderer.setRenderTarget(null);
        Common.renderer.render(this.scene, this.camera);
    }

    update(){
        // GUIからの色設定を更新
        const material = this.output.material;
        material.uniforms.baseColor.value.set(this.simulation.options.baseColor);
        material.uniforms.smokeColor.value.set(this.simulation.options.smokeColor);
        material.uniforms.intensity.value = this.simulation.options.intensity;
        
        this.simulation.update();
        this.render();
    }
}