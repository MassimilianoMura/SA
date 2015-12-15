var maxStageWidth = 950;
var maxStageHeight = 490;
var maxPageWidth = 1000;
var w;
var h;

function setStageWidth() {
  if (window.innerWidth < maxPageWidth) {

      resizeStage();

  } else {

      maxStageSize();

  };
};


function resizeStage() {

  var scalePercentage = window.innerWidth / maxPageWidth;

  stage.setAttr('scaleX', scalePercentage);
  stage.setAttr('scaleY', scalePercentage);
  stage.setAttr('width', maxStageWidth * scalePercentage);
  stage.setAttr('height', maxStageHeight * 0.7 * scalePercentage);
  stage.draw();
};


function maxStageSize() {
  stage.setAttr('scaleX', 1);
  stage.setAttr('scaleY', 1);
  stage.setAttr('width', maxStageWidth);
  stage.setAttr('height', maxStageHeight);
  stage.draw();
};

var stage = new Kinetic.Stage({
  container: 'container',
  width: maxStageWidth,
  height: maxStageHeight,
  scaleX: 1
});

setStageWidth();

window.addEventListener('resize', setStageWidth);

window.onload = function(){
  var layer = new Kinetic.Layer();
  stage.add(layer);
  var con = stage.getContainer();
  var dragSrcEl = null;

  document.getElementById("img1").addEventListener('dragstart',function(e){
    dragSrcEl = this;
    w = document.getElementById("img1").width;
    h = document.getElementById("img1").height;
  });

  document.getElementById("img2").addEventListener('dragstart',function(e){
    dragSrcEl = this;
    w = document.getElementById("img2").width;
    h = document.getElementById("img2").height;
  });

  document.getElementById("img3").addEventListener('dragstart',function(e){
    dragSrcEl = this;
    w = document.getElementById("img3").width;
    h = document.getElementById("img3").height;
  });


  con.addEventListener('dragover',function(e){
    e.preventDefault();
  });

  con.addEventListener('drop',function(e){
    var image = new Kinetic.Image({
      draggable : true,
      width: w,
      height: h
    });
    layer.add(image);
    imageObj = new Image();
    imageObj.src = dragSrcEl.src;
    imageObj.onload = function(){
        image.setImage(imageObj)
        layer.draw()
    };
   });

}


