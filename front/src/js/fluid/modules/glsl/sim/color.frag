precision highp float;
uniform sampler2D velocity;
uniform vec3 baseColor;
uniform vec3 smokeColor;
uniform float intensity;
varying vec2 uv;

void main(){
    vec2 vel = texture2D(velocity, uv).xy;
    float len = length(vel);
    
    float velocityIntensity = len * intensity;
    vec3 color = mix(baseColor, smokeColor, velocityIntensity);

    gl_FragColor = vec4(color,  1.0);
}
