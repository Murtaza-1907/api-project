const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if (backgroundImg)
background(backgroundImg)
    

   


}

async function getBackgroundImg(){
    var response = await fetch("http://www.worldtimeapi.org/api/timezone/Asia/Kolkata")
var responseType = await response.json()
var datetime= responseType.datetime
var r = datetime.slice(11,13)

 if(r>=04 && r<=06)
{
bg = "sunrise1.png"
}
else if(r>=06 && r<=08)
{
 bg = "sunrise2.png"   
}
else if(r >=08 && r<=09)
{
    bg = "sunrise3.png"
}
else if(r>=09 && r<=11)
{
    bg = "sunrise4.png"
}
else if(r>=11 && r<=15)
{
bg = "sunrise5.png"
}
else if(r>=15 && r<=17)
{
    bg= "sunset7.png"
}
else if(r>=17 && r<=19)
{
    bg ="sunset8.png"
}
else if(r>=19 && r<=20)
{
    bg ="sunset9.png"
}
else if(r>=20 && r<=22)
{
    bg = "sunset10.png"
}
else if(r>=22&&r<=23)
{
    bg = "sunset11.png"
}
else if(r>=23 && r<=04)
{
    bg = "sunset12.png"
}
else{
    bg = "sunset12.png"
}
    
console.log(datetime)

backgroundImg = loadImage(bg)
   

}
