Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_qualitity:90
});

var camera =document.getElementById("camera");

Webcam.attach("#camera");

function imgtake(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capturedimg" src="'+data_uri+'">';
    });
}
console.log(ml5.version);

var classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ZfY4tF9Sj/model.json",modelLoaded);
function modelLoaded(){
    console.log("model loaded");
}

function imgcheck(){
    var img=document.getElementById("capturedimg");
    classifier.classify(img,gotResult);
}

function gotResult(error,results){
    if(error){
console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("result_gesture_name").innerHTML=results[0].label;
        document.getElementById("result_gesture_name2").innerHTML=results[1].label;
        if(results[0].label == "amazing"){
            document.getElementById("result_gesture_emoji").innerHTML="&#128076;";
        }
        if(results[0].label == "victory"){
            document.getElementById("result_gesture_emoji").innerHTML="&#129304;";
        }
        if(results[0].label == "best"){
            document.getElementById("result_gesture_emoji").innerHTML="&#128077;";
        }

        if(results[1].label == "amazing"){
            document.getElementById("result_gesture_emoji2").innerHTML="&#128076;";
        }
        if(results[1].label == "victory"){
            document.getElementById("result_gesture_emoji2").innerHTML="&#129304;";
        }
        if(results[1].label == "best"){
            document.getElementById("result_gesture_emoji2").innerHTML="&#128077;";
        }
    }
}

