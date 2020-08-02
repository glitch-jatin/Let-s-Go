var w1,w2,w3,w4,w5,w6,w7,w8,w9,w10,w11,w12,w13,w14,w15,w16,w17,w18,w19,w20;
var w21,w22,w23,w24,w25,w26,w27,w28,w29,w30,w31,w32,w33,w34,w37,w38,w39;
var w40,w41,w42,w43,w44,w45,w46,w48,w49,w50,w51,w52,w53,w54,w55,w56,w57,w58,w59,w60,w61,w62,w63;

var map,mapimg,wallGroup;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var pc,pcimg;

function preload(){
	mapimg = loadImage("map.png")
	pcimg = loadImage("MainCharacter.png")
}

function setup() {
	createCanvas(displayWidth -20, displayHeight-120);

	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

		wallGroup = new Group();


	map = createSprite(displayWidth/2, displayHeight/2-20,800,800);
	map.addImage("car1",mapimg);

	pc = createSprite(650,600,5,5);
	pc.addImage("as",pcimg);
	pc.scale=0.1;

	w1 = createSprite(600,556,60,5);
	w1.shapeColor="red";
	w2 = createSprite(681,595,5,50);
	w2.shapeColor="green";
	w3 = createSprite(653,570,50,5);
	w3.shapeColor="blue";
	w4 = createSprite(645,620,80,5);
	w4.shapeColor="red";
	w5 = createSprite(630,558,5,20);
	w5.shapeColor="red";
	w6 = createSprite(605,610,5,20);
	w6.shapeColor="red";
	w7 = createSprite(565,600,85,5);
	w7.shapeColor="red";
	w8 = createSprite(520,588,5,20);
    w8.shapeColor="red";
	w9 = createSprite(500,588,50,5);
	w9.shapeColor="red";
	w10 = createSprite(470,550,20,5);
	w10.shapeColor="red";
	w11 = createSprite(475,570,5,40);
	w11.shapeColor="red";
	w12 = createSprite(460,500,5,100);
	w12.shapeColor="red";
	w13 = createSprite(545,540,45,5);
	w13.shapeColor="red";
	w14 = createSprite(568,545,5,25);
	w14.shapeColor="red";
	w15 = createSprite(520,530,5,25);
	w15.shapeColor="red";
	w16 = createSprite(510,525,20,5);
	w16.shapeColor="red";
	w17 = createSprite(505,480,5,100);
	w17.shapeColor="red";
	w18 = createSprite(500,430,20,5);
	w18.shapeColor="red";
	w19 = createSprite(490,390,5,90);
	w19.shapeColor="red";
	w20 = createSprite(445,400,5,110);
	w20.shapeColor="red";

	
	w21 = createSprite(450,110,100,5);
	w21.shapeColor="red";
	w22 = createSprite(490,100,5,20);
	w22.shapeColor="red";
	w23 = createSprite(540,100,5,20);
	w23.shapeColor="red";
	w24 = createSprite(515,90,50,5);
	w24.shapeColor="red";
	w25 = createSprite(575,110,70,5);
	w25.shapeColor="red";
	w26 = createSprite(615,115,5,20);
	w26.shapeColor="red";
	w27 = createSprite(635,125,40,5);
	w27.shapeColor="red";
	w28 = createSprite(520,300,190,5);
	w28.shapeColor="red";
	w29 = createSprite(425,235,5,130);
	w29.shapeColor="red";
	w30 = createSprite(433,170,20,5);
	w30.shapeColor="red";

	w31 = createSprite(440,163,5,20);
	w31.shapeColor="black";
	w32 = createSprite(515,157,150,5);
	w32.shapeColor="green";
	w33 = createSprite(588,163,5,15);
	w33.shapeColor="blue";
	w34 = createSprite(635,170,100,5);
	w34.shapeColor="red";
	w35 = createSprite(683,245,5,150);
	w35.shapeColor="brown";
	w36 = createSprite(618,306,5,25);
	w36.shapeColor="pink";
	w37 = createSprite(650,315,65,5);
	w37.shapeColor="red";
	w38 = createSprite(650,105,5,35);
    w38.shapeColor="red";
	w39 = createSprite(675,85,55,5);
	w39.shapeColor="red";
	w40 = createSprite(700,105,5,35);
	w40.shapeColor="red";
	w41 = createSprite(725,125,55,5);
	w41.shapeColor="red";
	w42 = createSprite(750,117,5,20);
	w42.shapeColor="red";
	w44 = createSprite(755,110,20,5);
	w44.shapeColor="red";
	w45 = createSprite(765,100,5,20);
	w45.shapeColor="red";
	w46 = createSprite(860,90,190,5);
	w46.shapeColor="red";
	
	w48 = createSprite(890,140,160,5);
	w48.shapeColor="red";
	w49 = createSprite(810,147,5,20);
	w49.shapeColor="red";
	w50 = createSprite(803,155,20,5);
	w50.shapeColor="red";

	w51 = createSprite(795,160,5,20);
	w51.shapeColor="black";
	w52 = createSprite(762,170,65,5);
	w52.shapeColor="green";
	w53 = createSprite(730,245,5,150);
	w53.shapeColor="blue";
	w54 = createSprite(450,455,20,5);
	w54.shapeColor="black";
	w55 = createSprite(395,335,5,15);
	w55.shapeColor="green";
	w56 = createSprite(418,345,50,5);
	w56.shapeColor="blue";
	w57 = createSprite(540,348,105,5);
	w57.shapeColor="red";
	w58 = createSprite(590,352,5,20);
	w58.shapeColor="brown";
	w59 = createSprite(655,365,130,5);
	w59.shapeColor="pink";
	w60 = createSprite(390,330,15,5);
	w60.shapeColor="red";
	w61 = createSprite(380,225,5,210);
    w61.shapeColor="red";
	w62 = createSprite(390,125,15,5);
	w62.shapeColor="red";
	w63 = createSprite(395,118,5,20);
	w63.shapeColor="red";

	//w4 = createSprite(418,345,5,105);
	//w4.shapeColor="red";
	//w5 = createSprite(590,352,5,20);
	//w5.shapeColor="red";
	//w6 = createSprite(655,365,130,5);
	//w6.shapeColor="red";
	//w7 = createSprite(390,330,15,5);
	//w7.shapeColor="red";
	//w8 = createSprite(380,225,5,210);
    //w8.shapeColor="red";
	//w9 = createSprite(390,125,15,5);
	//w10 = createSprite(395,118,5,20);
	//w10.shapeColor="red";
	//w11 = createSprite(450,110,100,5);
	//w11.shapeColor="red";
	//w12.shapeColor="red";
	//w13 = createSprite(540,100,5,20);
	//w13.shapeColor="red";
	//w15 = createSprite(575,110,70,5);
	//w15.shapeColor="red";
	//w16 = createSprite(615,115,5,20);
	//w16.shapeColor="red";
	//w17 = createSprite(635,125,40,5);
	//w17.shapeColor="red";
	//w18 = createSprite(520,300,190,5);
	//w18.shapeColor="red";
	//w19 = createSprite(425,235,5,130);
	//w19.shapeColor="red";
	//w20 = createSprite(433,170,20,5);
	//w20.shapeColor="red";

	wallGroup.add(w1);
	wallGroup.add(w2);
	wallGroup.add(w3);
	wallGroup.add(w4);
	wallGroup.add(w5);
	wallGroup.add(w6);
	wallGroup.add(w7);
	wallGroup.add(w8);
	wallGroup.add(w9);
	wallGroup.add(w10);
	
	wallGroup.add(w11);
	wallGroup.add(w12);
	wallGroup.add(w13);
	wallGroup.add(w14);
	wallGroup.add(w15);
	wallGroup.add(w16);
	wallGroup.add(w17);
	wallGroup.add(w18);
	wallGroup.add(w19);
	wallGroup.add(w20);

	wallGroup.add(w21);
	wallGroup.add(w22);
	wallGroup.add(w23);
	wallGroup.add(w24);
	wallGroup.add(w25);
	wallGroup.add(w26);
	wallGroup.add(w27);
	wallGroup.add(w28);
	wallGroup.add(w29);
	wallGroup.add(w30);

	wallGroup.add(w31);
	wallGroup.add(w32);
	wallGroup.add(w33);
	wallGroup.add(w34);
	wallGroup.add(w35);
	wallGroup.add(w36);
	wallGroup.add(w37);
	wallGroup.add(w38);
	wallGroup.add(w39);
	wallGroup.add(w40);

	wallGroup.add(w41);
	wallGroup.add(w42);
	wallGroup.add(w43);
	wallGroup.add(w44);
	wallGroup.add(w45);
	wallGroup.add(w46);
	
	wallGroup.add(w48);
	wallGroup.add(w49);
	wallGroup.add(w50);

	wallGroup.add(w51);
	wallGroup.add(w52);
	wallGroup.add(w53);
	wallGroup.add(w54);
	wallGroup.add(w55);
	wallGroup.add(w56);
	wallGroup.add(w57);
	wallGroup.add(w58);
	wallGroup.add(w59);
	wallGroup.add(w60);

	wallGroup.add(w61);
	wallGroup.add(w62);
	wallGroup.add(w63);
	
}


function draw() {
	background(0);
	
  rectMode(CENTER);
  
 drawSprites();
 text(mouseX+","+mouseY,mouseX,mouseY);
	
	if(keyDown(LEFT_ARROW)){
		pc.velocityX=-3;
	}

	if(keyDown(RIGHT_ARROW)){
		pc.velocityX=3;
	}

	if(keyDown(UP_ARROW)){
		pc.velocityY=-3;
	}

	if(keyDown(DOWN_ARROW)){
		pc.velocityY=3;
	}

	//keyWentUp

	if(keyWentUp(LEFT_ARROW)){
		pc.velocityX=0;
	}

	if(keyWentUp(RIGHT_ARROW)){
		pc.velocityX=0;
	}

	if(keyWentUp(UP_ARROW)){
		pc.velocityY=0;
	}

	if(keyWentUp(DOWN_ARROW)){
		pc.velocityY=0;
	}

	pc.bounceOff(wallGroup);


}

