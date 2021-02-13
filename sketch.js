const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


//Declaring variables

var engine, world;

var ground, ground2;
var backgroundImg,boyImage,waterImage,sound,hurtSound,failImage,failSound;
var rock1, string;
var gameState;
var a,b,c,d,e;
var string;
var check;
var wait;
var check1,check2,check3;
var timeCount,timeCount2,timeCount3,timeCount4;
var crow,boxPiece1,boxPiece2,boxPiece3;
var firstLevel;
var music,mainMcounter;


function preload() {
    //Loading images and sound
    backgroundImg = loadImage("desert-clipart.png");
    boyImage = loadImage("human.png");
    waterImage = loadImage("Water.png");
    sound = loadSound("mixkit-video-game-bomb-alert-2803.wav");
    hurtSound = loadSound("classic_hurt.mp3");
    failSound = loadSound("fail-sound.mp3");
    failImage = loadImage("game_over.png");
    music = loadSound("musicMain.mp3")
    
}

function setup(){
    var canvas = createCanvas(1200,600);

    engine = Engine.create();
    world = engine.world;

    crow = new Crow(825,460,90,90,0);

    ground = new Ground(600,595,1200,20);

    ground2 = new Ground(335,525,90,120)

    rock1 = new Rock(300,380,random(26,34),random(26,34),0);   

    okay = new OkayButton(800,400,50,50);

    string = new Sling(rock1.body,{x:305,y:415});
    

    //BoxPiece 1,2 and 3 are the box and the fourth one is the barrier
    boxPiece1 = new Ground(680,580,280,10);

    boxPiece2 = new Ground(535,535,10,100);

    boxPiece3 = new Ground(825,535,10,100);

    obstacle = new Ground(480,515,20,140)

    gameState = "textMode";

    a = 0;

    b = "#999999";

    c= 0;

    d = 20;


    //These are timers 
    wait = 0;

    check = 0;

    check1 = 0;
    check2 = 0;
    check3 = 0;

    timeCount = 0;

    //FirstLevl is the height of the water
    firstLevel = random(80,100)

    timeCount2 = 0;

    timeCount3 = 0;

    timeCount4 = 0;

    mainMcounter = 0;
    
}

function draw(){
    //Background color is b because I wanted to change it with the gameState
    background(b);
    Engine.update(engine);  

    

    if(gameState === "play"){
        imageMode(CENTER);
        image(backgroundImg,600,400,1200,800);
        image(boyImage,350,390,112,150);        


        mainMcounter = mainMcounter + 1;
        if(mainMcounter === 1){
            music.play();
        }



        string.display();
        rock1.display();
        
        image(waterImage,680,575,300,d);
        b= "#66d9ff";
        Matter.Body.setPosition(okay.body,{x:20000,y:1000});
        //Making the rock stick to the cursor.
       
                if(c === 1){   
                    if(rock1.body.position.y<465){
                        Matter.Body.setPosition(rock1.body, {x: mouseX , y: mouseY});                 
                    }         
                    
                }
           
      
                push();
                textSize(25);
                fill("#90ae34");
                text("Throw the rock in the container",500,400);
                translate(676,398);
                angleMode(DEGREES);
                rotate(90);
                text("--",5,0);
                text(">",20,2);
                pop();  

        boxPiece1.display();
        boxPiece2.display();
        boxPiece3.display();
        ground.display();
        ground2.display();
        obstacle.display();
        
        if((rock1.body.position.x>540)&&(rock1.body.position.y>510)){
            if(rock1.body.position.x<825){
                
                if(check<1){                   
                   
                    if((rock1.body.position.y>(crow.body.position.y-6))&&(rock1.body.position.y<(crow.body.position.y+6))){
                        if(rock1.body.position.x>750){
                            timeCount3 = timeCount3+1;
                            if(timeCount3===1){
                                hurtSound.play()
                            }
                            if(timeCount3===3){
                                gameState = "lost"
                            }
                            
                        }
                    }
                   
                  

                    
                    if(d<firstLevel){
                        d = d+2;                    
                     }    
                    if(d>firstLevel){
                        Matter.Body.setPosition(rock1.body,{x:300,y:380});
                        string.attach(rock1.body);
                        check = 1;
                        rock1.width=random(43,50);
                        rock1.height=random(35,45);
                    }           
                    
                   
                }
                if(check===1){
                    if((rock1.body.position.y>(crow.body.position.y-6))&&(rock1.body.position.y<(crow.body.position.y+6))){
                        if(rock1.body.position.x>750){
                            timeCount3 = timeCount3+1;
                            if(timeCount3===1){
                                hurtSound.play()
                            }
                            if(timeCount3===5){
                                gameState = "lost"
                            }
                            
                        }
                    }
                    if(d<180){
                        d = d+2;                      
                    }    
                             
                    check = 1;                   
                }
            }
           
        }
        //MAking the rock attach to the string when it is not in the box.
        if((rock1.body.position.x<535)&&(rock1.body.position.y>550)){
            Matter.Body.setPosition(rock1.body,{x:300,y:380});
            string.attach(rock1.body);
        }
        if(rock1.body.position.x>825){
            Matter.Body.setPosition(rock1.body,{x:300,y:380});
            string.attach(rock1.body);    
        
        }
        if(mouseX != rock1.body.position.x){
            if((rock1.body.position.x<280)&&(rock1.body.position.y>555)){
            Matter.Body.setPosition(rock1.body,{x:300,y:380});
            string.attach(rock1.body);  
            }
        }
        if(d <180){
            crow.display();
        }
        else if(d>179){
            crow.tilt();
            timeCount = timeCount +1;
            if(timeCount>50){
                gameState = "endMode";
            }
        }
}

//InterChange gameState is the loading screen/
if(gameState === "interChange"){
    
    push();

    wait = wait+5;    
    b = "#0da50d";
    textSize(50);
    fill("#d7d742");
    text("Wait    the game is loading",300,540);
    
    check1 = check1 + 1;
    check2 = check2 + 1;
    check3 = check3 + 1;

    if(check1>5){
        text(".",405,540);
        if(check1>49){
        check1 = 0;
       }        
    }
    if(check2>10){
        text(" .",405,540);
        if(check2>54){
        check2 = check1;
        }
    }
    if(check3>15){
        text("  .",405,540);
        if(check3>59){
        check3 = check1;
        }
     }

    pop();
if(wait>1200){
    gameState ="play";   
}

}
if(gameState === "endMode"){
    textSize(100);
    fill("#d7d742");
    text("Well Played!",300,350);
    timeCount2 = timeCount2+1;
    if(timeCount2<2){
        sound.play();
        music.stop()
    };
    
}
if(gameState === "lost"){
imageMode(CENTER);
image(failImage,600,250,600,400);
fill("#ffccff");
textSize(45);
text("Looks like you killed the crow!",320,500);
timeCount4 = timeCount4 + 1;
if(timeCount4 === 1){
    failSound.play();
}

}
//the first gameState
     
    if(gameState === "textMode"){      
fill("#ffbb33");
        textSize(42);
            text("The crow is thirsty, but lazy.",320,180);
        textSize(30);
            text("In this game, you have to help a crow get the water by dropping stones in the water.",60,220);
        textSize(30);
            text("The stones are on the left, and you have to throw the rocks in the container on the right.",35,270);
            
        okay.display();
        GameStateChange()
    }
    
    
}

function mouseDragged(){
    
            if(gameState === "play"){
                Matter.Body.setPosition(rock1.body, {x: mouseX , y: mouseY});
                c = 1;
            }
        
    
}
function mousePressed(){
   
            if(gameState === "textMode"){
                if((mouseX>789)&&(mouseX<811)){
                    if((mouseY>389)&&(mouseY<411)){
                        a=5;
                    }
                }
            }
    
}
function mouseReleased(){
   

            if(gameState === "play"){
            string.fly();
            c = 0;
            }
          
    
}
function GameStateChange(){
    //Making the button change colour
    var pos = okay.body.position;
    var number,number1;
    
        if(mouseX> pos.x){
            number = mouseX - pos.x;
        }
        if(mouseX< pos.x){
           number = - mouseX + pos.x;
        }
        if(mouseY> pos.y){
            number1 = mouseY - pos.y;
        }
        if(mouseY< pos.y){
           number1 = - mouseY + pos.y;
        }

        push();

        translate(pos.x, pos.y);

        if(number + number1   < 22){
            if(a === 5){
             gameState = "interChange";
            }
        }
   
        pop();
}


