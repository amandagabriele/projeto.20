
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var solo;



function setup() {
	createCanvas(600, 500);
	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
//plane_options: é para o ground(solo,chão).
	var plane_options = {
		isStatic : true
	}
//block1_options: são as propriedades fisicas; é para o circle(circulo),essa variavel faz com que o objeto caia e pule na tela.
	var block1_options = {
		restitution : 0.5,
		friction : 0.02,
		frictionAir : 0
	}
//block2_options: são as propriedades fisicas,é para o rectangle(quadrado), essa variavel faz com que o objeto caia e pule na tela.
	var block2_options = {
		restitution : 0.7,
		friction : 0.01,
		frictionAir : 0.1
	}
//block3_options: são as propriedades fisicas, é para o rectangle(retangulo), essa variavel faz com que o objeto caia e pule na tela.
	var block3_options = {
		restitution : 0.01,
		friction : 1,
		frictionAir : 0.3
	}
//os corpos para criar os objetos na tela.
	solo = Bodies.rectangle(200,500,950,10,plane_options);
	//world.add: é para adicionar ao mundo,como chamamos.
	World.add(world,solo);

	block1 = Bodies.circle(220,10,10,block1_options);
	World.add(world,block1);
	
	block2 = Bodies.rectangle(110,50,10,10,block2_options);
	World.add(world,block2);

	block3 = Bodies.rectangle(350,50,20,10,block3_options);    
    World.add(world,block3);
    
	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  //background:é para adicionar cor na tela.
  background("pink");
//ellipce: circulo; rect: quadrado,retangulo e solo.
fill("red");
  ellipse(block1.position.x,block1.position.y,40);
  fill("red");
  rect(block2.position.x,block2.position.y,40,40);
  rect(block3.position.x,block3.position.y,55,30);

  rect(solo.position.x,solo.position.y,800,10);
  
  Engine.update(engine);


//desenha os sprites na tela .
  drawSprites();
 
}
