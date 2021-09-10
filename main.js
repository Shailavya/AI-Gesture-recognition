 
function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(600, 450);
    canvas.position(560, 80);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw() {
    document.getElementById("side_square").innerHTML = "Width and Height of the square will be - " + difference + " px";
    background("#009B81");
    fill("#4682b4");
    stroke("#4682b4");
    square(noseX, noseY, difference);
}

function modelLoaded() {
    console.log("Pose Net is initialized!");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results)
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX + " nose y = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("Left wrist X = " + leftWristX + " Right wrist X = " + rightWristX +  "difference = " + difference);

    }
}

var noseX = 0;
var noseY = 0;
var difference = 0;
var rightWristX = 0;
var leftWristX = 0;



