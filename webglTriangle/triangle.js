document.addEventListener('DOMContentLoaded', start);

var gl;

function start(){
  var canvas = document.getElementById("renderCanvas");
  g1 = canvas.getContext("webgl2");
  var triangleVertices = [
    1.0,-1.0,0.0,
    0.0,1.0,0.0,
    -1.0,-1.0,0.0
  ];
  var traingleVBuffer = g1.createBuffer();
  g1.bindBuffer(g1.ARRAY_BUFFER,traingleVBuffer);
  g1.bufferData(g1.ARRAY_BUFFER, new Float32Array(triangleVertices),g1.STATIC_DRAW);
  
  var triangleColors = [
    1.0,0.0,0.0,1.0,
    0.0,1.0,0.0,1.0,
    0.0,0.0,1.0,1.0,
  ];
  var traingleCBuffer = g1.createBuffer();
  g1.bindBuffer(g1.ARRAY_BUFFER,traingleCBuffer);
  g1.bufferData(g1.ARRAY_BUFFER, new Float32Array(triangleColors),g1.STATIC_DRAW);
  
  getAndCompileVertexShader("vertexShader");
}

function getAndCompileVertexShader(id){
  var shader;
  var shaderElement = document.getElementById(id);
  var shaderText = shaderElement.text;
  shader = g1.createShader(g1.VERTEX_SHADER);
  g1.shaderSource(shader,shaderText);
  
  return shader;
}
