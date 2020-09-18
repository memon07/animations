var text = new Blotter.Text('Shoyeb', {
  size:300,
  padding:80,
})

var material = new Blotter.FliesMaterial();
material.uniforms.uPointCellWidth.value = 0.01;
material.uniforms.uPointRadius.value = 0.4;
material.uniforms.uSpeed.value = 5;

var blotter = new Blotter(material, {
  texts: text
})

var scope = blotter.forText(text);

scope.appendTo(document.body)
