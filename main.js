noseX=0;
noseY=0;
difference = 0;
rightWristX = 0 ;
leftWristX = 0 ;

function setup() {
    video = createCapture(VIDEO);
     video.size(550, 500);
 
     canvas = createCanvas(550, 550);
     canvas.position(850, 150);
 
     poseNet = ml5.poseNet(video, modelLoaded);
     poseNet.on('pose' , gotPoses);
 }
 
 function modelLoaded() {
     console.log('PoseNet Is Initialized !');
 }
 
 function draw() {
     background('#c9c9c9');
     text('YASH' , 50, 400 );
     textsize(difference);
     fill('#fa0202');

     
 }
 
 function gotPoses(results)
 {
     if(results.length > 0)
     {
         console.log(results);
         noseX = results[0].pose.nose.x;
         noseY = results[0].pose.nose.y;
difference = floor(leftWristX - rightWristX);

         console.log("noseX = " + leftWrist + "reightWristX = "+ rightWristX + "difference = " + difference)
     }
 }