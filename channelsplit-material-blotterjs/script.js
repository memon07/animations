var text = new Blotter.Text('Shoyeb', {
  size:200,
  padding:80,
})

var material = new Blotter.ChannelSplitMaterial();
material.uniforms.uOffset.value = 0.05;
material.uniforms.uRotation.value = 50;
material.uniforms.uApplyBlur.value = 1;
material.uniforms.uAnimateNoise.value = .3;

var blotter = new Blotter(material, {
  texts: text
})

var scope = blotter.forText(text);

scope.appendTo(document.body);

document.onmousemove = moveIt;

function moveIt(event){
    material.uniforms.uOffset.value = (event.clientX * .0001);
    material.uniforms.uRotation.value = (event.clientX * .1);
}

