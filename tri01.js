window.onload = function() {
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  context.width = window.innerWidth;
  context.height = window.innerHeight;

  console.log(context);
  const width = context.width;
  const height = context.height;

  context.translate(0, height / 2);
  for (var angle = 0; angle < Math.PI * 2; angle += 0.01) {
    var x = angle * 100,
      y = Math.sin(angle) * 100;
    context.fillRect(x, y, 3, 3);
  }
};
