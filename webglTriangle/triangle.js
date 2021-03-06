document.addEventListener('DOMContentLoaded', start);

var gl;

function start(){
  var canvas = document.getElementById("renderCanvas");
  gl = canvas.getContext("webgl2");
  var triangleVertices = [
    1.0,-1.0,0.0,
    0.0,1.0,0.0,
    -1.0,-1.0,0.0
  ];
  var traingleVBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER,traingleVBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(triangleVertices),gl.STATIC_DRAW);
  
  var triangleColors = [
    1.0,0.0,0.0,1.0,
    0.0,1.0,0.0,1.0,
    0.0,0.0,1.0,1.0,
  ];
  var traingleCBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER,traingleCBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(triangleColors),gl.STATIC_DRAW);
  
  var vertexShader = getAndCompileShader("vertexShader");
  var fragmentShader= getAndCompileShader("fragmentShader");
  var shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);

  if(!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    alert('Error in program');
  }

  gl.useProgram(shaderProgram);

  var posAttrLoc = gl.getAttribLocation(shaderProgram, 'position');
  gl.enableVertexAttribArray(posAttrLoc);
  gl.bindBuffer(gl.ARRAY_BUFFER, traingleVBuffer);
  // gl.vertexAttribPointer(index,size,type,normalized,stride,offset);
  gl.vertexAttribPointer(posAttrLoc,3,gl.FLOAT,false,0,0);


  var colAttrLoc = gl.getAttribLocation(shaderProgram, 'color');
  gl.enableVertexAttribArray(colAttrLoc);
  gl.bindBuffer(gl.ARRAY_BUFFER, traingleCBuffer);
  gl.vertexAttribPointer(colAttrLoc,4,gl.FLOAT,false,0,0);

  requestAnimationFrame(runRenderLoop);

  function runRenderLoop(){
    gl.clearColor(0,0,0,1);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.drawArrays(gl.TRIANGLES,0,3);

    requestAnimationFrame(runRenderLoop);
  }

}

function getAndCompileShader(id){
  var shader;
  var shaderElement = document.getElementById(id);
  var shaderText = shaderElement.text.trim();
  console.log(':::', shaderText);
  if(id === 'vertexShader')
    shader = gl.createShader(gl.VERTEX_SHADER);
  else if(id === 'fragmentShader')
    shader = gl.createShader(gl.FRAGMENT_SHADER);

  gl.shaderSource(shader,shaderText);
  gl.compileShader(shader);

  if(!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.log(gl.getShaderInfoLog(shader))
    alert(gl.getShaderInfoLog(shader));
    return null;
  }
  
  return shader;
}
