 
 function setup(){
    canvas= createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(400,400);
    video.hide();
 }

 function start(){
    objectdetector= ml5.objectDetector('cocossd', modal_loaded)
    document.getElementById("status").innerHTML="status : Detecting Objects";
 }

 function modal_loaded(){
    console.log(" Modal Loaded ");
    status=true;
    video.volume(1);
    video.speed(2);
}

function got_results(errors, results){
    if (errors) {
        console.log(errors);
    }
    else{
        console.log(results);
        objects=results;
    }
}

function draw(){
image(video,0,0,480,380);
if (status != "") {
    objectdetector.detect(video,got_results);
   for (let i= 0; i < objects.length; i++) {
 document.getElementById("status").innerHTML= "Status: Objects Detector";
 docment.getElementById("no_of_onjects_detected").innerHTML="No of Objects Detected"+objects.length;

 fill("Blue");
 accuracy=floor(objects[i].confidence*100);
    Text(objects[i].label+" "+accuracy+"%",objects[i].x+15,objects[i].y+15);
    nofill();
    stroke(red);
    rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
   }
}
}