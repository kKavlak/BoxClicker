$(function(){
    //alert("loaded");
    
let arr = [3];
arr[0] = Math.floor((Math.random() * 16) + 1);
arr[1] = Math.floor((Math.random() * 16) + 1);
arr[2] = Math.floor((Math.random() * 16) + 1);

while (arr[1] === arr[0] || arr[2] === arr[0]){
    arr[0] = Math.floor((Math.random() * 16) + 1);
}

while (arr[0] === arr[1] || arr[2] === arr[1]){
    arr[1] = Math.floor((Math.random() * 16) + 1);
}

while (arr[0] === arr[1] || arr[0] === arr[2]){
    arr[2] = Math.floor((Math.random() * 16) + 1);
}

//alert(`${arr[0]}, ${arr[1]}, ${arr[2]}`);

for(a of arr){
    $(`#box${a}`).css("background-color", "black");
}

var p = 400, org = 400;
var flag = 1;

var countdown = setInterval(incCounter, 1000);
function incCounter() {
    var counter = parseInt($("#cd").text()) ;
    if(counter != 0)
    {
    counter--;
    $("#cd").text(counter);
    }
    else{
       $("#message").css("color", "black");
       for(a of arr){
           a = 0;
       }
       for(var i = 1; i < 17; i++){
           $(`#box${i}`).css("background-color", "white");
       } 
       $("#tleft").css("width", "0px");
       flag = 0;
    }
}

var pointTime = setInterval(ptsCounter, 50);
function ptsCounter(){
   if(p != 0)
   { 
    p-=20;
    $("#tleft").css("width", p+"px");
    $("#tspent").css("width", (org-p)+"px");
    }
}

var points = 0;
var hs = localStorage.getItem("hs");
hs = 0;

$(`#box1`).add(`#box2`).add(`#box3`).add(`#box4`).add(`#box5`).add(`#box6`)
.add(`#box7`).add(`#box8`).add(`#box9`).add(`#box10`).add(`#box11`).add(`#box12`)
.add(`#box13`).add(`#box14`).add(`#box15`).add(`#box16`).click(function(e){
    if( flag === 1){
    var boxId= $(e.target).attr('id').substring(3, 5);;
    for(var t = 0; t < 3; t++){
        if(arr[t] == parseInt(boxId)){
            if(p > 300){
                points += 10;
            }
            else if(p > 200){
                points += 5;
            }
            else if(p > 100){
                points += 2;
            }
            else{
                points++;
            }
            $("#sc").text(points);
            p = 400;
            $(this).css("background-color","white");            
            var pre = arr[t];
            switch(t){
                case 0:
                    do{
                        arr[t] = Math.floor(Math.random() * 16) + 1;
                    }while(arr[t] === arr[1] || arr[t] === arr[2] || arr[t] === pre);
                    $(`#box${arr[t]}`).css("background-color", "black")
                    break;
                case 1:
                    do{
                        arr[t] = Math.floor(Math.random() * 16) + 1;
                    }while(arr[t] === arr[0] || arr[t] === arr[2] || arr[t] === pre);
                    $(`#box${arr[t]}`).css("background-color", "black")
                    break;
                case 2:
                    do{
                        arr[t] = Math.floor(Math.random() * 16) + 1;
                    }while(arr[t] === arr[0] || arr[t] === arr[1] || arr[t] === pre);
                    $(`#box${arr[t]}`).css("background-color", "black")
                    break;
            }
        }
    }
   if (points > hs){
    hs = points   
    localStorage.setItem("hs", hs);
   }    
}
})

})
