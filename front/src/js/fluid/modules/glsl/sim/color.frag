precision highp float;
uniform sampler2D velocity;
varying vec2 uv;

void main(){
    vec2 vel = texture2D(velocity, uv).xy;
    float len = length(vel);
    
    // F5F2EDベースに煙
    float intensity = len * 0.8;
    vec3 baseColor = vec3(0.961, 0.949, 0.929); // #F5F2ED
    vec3 smokeColor = vec3(0.8, 0.75, 0.7); // 煙の色
    vec3 color = mix(baseColor, smokeColor, intensity);

    gl_FragColor = vec4(color,  1.0);
}
