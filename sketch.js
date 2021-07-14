function setup() {
    createCanvas(665,400);
    //somTrilha.loop();
  }
  //sons do jogo//
  let somRaquetada;
  let somPonto;
  let somTrilha;
  //variáveis da bolinha//
  let xBolinha = 300;
  let yBolinha = 200;
  let diametro = 20;
  let raio = diametro / 2;
  //variáveis da velocidade//
  let velocidadeXBolinha = 5;
  let velocidadeYBolinha = 5;
  
  function bolinha (){
    circle(xBolinha, yBolinha, diametro);
  }
  function movimentoBolinha(){
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
  }
  function colisaoBolinha(){
    if(xBolinha + raio > width || xBolinha - raio < 0) {
      velocidadeXBolinha *= -1;
    }
    if(yBolinha + raio > height || yBolinha - raio < 0) {
      velocidadeYBolinha *= -1;
    }
  }
  //variáveis da raquete1//
  let xRaquete1 = 20;
  let yRaquete1 = 165;
  //variáveis compartilhadas
  let larguraRaquete = 10;
  let alturaRaquete = 90;
  //variáveis da raquete2//
  let xRaquete2 = 635;
  let yRaquete2 = 165;
  let velocidadeYRaquete2;
  
  function raquete(x, y){
    rect(x, y, larguraRaquete, alturaRaquete);
  }
  function movimentaRaquete(){
    if (keyIsDown(UP_ARROW)){
      yRaquete1 -= 10;
    }
    if (keyIsDown(DOWN_ARROW)) {
      yRaquete1 += 10;
    }
      if(yRaquete1 > height || yRaquete1 < 0) {
       
    }
  }
  function movimentoRaquete2() {
    velocidadeYRaquete2 = yBolinha - yRaquete2 - alturaRaquete / 2 -47;
    yRaquete2 += velocidadeYRaquete2
  }
  
  var colisao = false;
  function verificaColisaoRaquete(x, y) {
      colisao = collideRectCircle(x, y, larguraRaquete, alturaRaquete, xBolinha, yBolinha, raio);
    if (colisao){
      velocidadeXBolinha *= -1;
//      somRaquetada.play();
    }
  }
  //variáveis ----- placares//
  let meusPontos = 0;
  let pontosOponente = 0;
  
  function incluiPlacar() {
    stroke(255)
    textAlign(CENTER)
    textSize(26);
    fill(color(75,0,130));
    rect(80, 10, 40, 30);
    fill(255);
    text(meusPontos, 100, 34);
    fill(color(75,0,130));
    rect(545, 10, 40, 30);
    fill(255);
    text(pontosOponente, 565, 34);
  }
  function marcaPonto() {
    if(xBolinha > 655){
      meusPontos += 1;
  //    somPonto.play();
    }
      if(xBolinha < 10){
      pontosOponente += 1;
    //    somPonto.play();
    }
  }
  // function preload(){
  //   somTrilha = loadSound("trilha.mp3");
  //   somPonto = loadSound("ponto.mp3");
  //   somRaquetada = loadSound("raquetada.mp3");
  // }
  
  function draw() {
    background(72,61,139);
    bolinha();
    movimentoBolinha();
    colisaoBolinha();
    raquete(xRaquete1, yRaquete1);
    raquete(xRaquete2, yRaquete2);
    movimentaRaquete();
    verificaColisaoRaquete(xRaquete1, yRaquete1);
    verificaColisaoRaquete(xRaquete2, yRaquete2);
    movimentoRaquete2();
    marcaPonto();
    incluiPlacar();
  }