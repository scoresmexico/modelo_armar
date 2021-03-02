/*
En un cuadrado presentaremos un pentagrama. A un lado habran 5 imagenes que hay que organizar. Una vez que el usuario determine que estan organizadas, un boton enviara las posiciones x,y de cada uno. De esta forma se podra evaluar la legibilidad, mediante el algoritmo matemmatico que fue definido en el marco teorico.
*/

//pantalla
let s_height = 400, s_width = 400, size_w = (s_width/12), size_h = (s_height/20), size = 0.35;

//notacion
let acento, clave_sol, cuarto, fff, sostenido;
//genera imagenes
let im_clave, im_cuarto, im_acento, im_fff, im_sostenido;
//coordenadas de la notacion
let clave_sol_x = 0, clave_sol_y = 0, cuarto_x = 0, cuarto_y = (clave_sol_y + size_h + (341 * size)), acento_x = 0, acento_y = (cuarto_y + size_h + (197 * size)), fff_x = 0, fff_y = (acento_y + size_h + (54 * size)), sostenido_x = 0, sostenido_y = (fff_y + size_h + (113 * size));

//posicion relativa del mouse
let actX, actY;
// esta el mouse presionado sobre la notacion?
let over_clave=false, over_cuarto=false, over_acento=false, over_fff=false, over_sostenido=false;


function preload() {
    acento = loadImage('notacion/acento.png'); //dims 79, 54
    clave_sol = loadImage('notacion/clave_sol.png'); // 126, 341
    cuarto = loadImage('notacion/cuarto.png'); // 62, 197
    fff = loadImage('notacion/fff.png'); // 192, 113
    sostenido = loadImage('notacion/sostenido.png'); // 45, 154
}

function setup() {
    createCanvas(s_width, s_height);
}

function draw() {
    background(255);
    //marco
    rect(0, 0, s_width, s_height);

    //--- lineas de compas
    line( size_w*2, size_h*7, size_w*10, size_h*7 );
    line( size_w*2, size_h*8, size_w*10, size_h*8 );
    line( size_w*2, size_h*9, size_w*10, size_h*9 );
    line( size_w*2, size_h*10, size_w*10, size_h*10 );
    line( size_w*2, size_h*11, size_w*10, size_h*11 );
    stroke(0);
    strokeWeight(2);

    //--- notacion
    im_clave = image(clave_sol, clave_sol_x, clave_sol_y, (126 * size), (341 * size));
    im_cuarto = image(cuarto, cuarto_x, cuarto_y, (62 * size), (197 * size));
    im_acento = image(acento, acento_x, acento_y, (79 * size), (54 * size));
    im_fff = image(fff, fff_x, fff_y, (192 * size), (113 * size));
    im_sostenido = image(sostenido, sostenido_x, sostenido_y, (45 * size), (154 * size));
    im_clave;
    im_cuarto;
    im_acento:
    im_fff;
    im_sostenido;

}

function mousePressed(){
  //print(actX,actY);
  if ((mouseX>clave_sol_x)&&(mouseX<(clave_sol_x+(126 * size)))&&(mouseY>clave_sol_y)&&(mouseY<(clave_sol_y+(341 * size)))){
    //print("tocaste clave de sol")
    actX = mouseX - clave_sol_x;
    actY = mouseY - clave_sol_y;
    over_clave = true;
  } else if((mouseX>cuarto_x)&&(mouseX<(cuarto_x+(62 * size)))&&(mouseY>cuarto_y)&&(mouseY<(cuarto_y + (197 * size)))) {
    //print("tocaste cuarto")
    actX = mouseX - cuarto_x;
    actY = mouseY - cuarto_y;
    over_cuarto = true;
  } else if((mouseX > acento_x)&&(mouseX < (acento_x + (79 * size)))&&(mouseY > acento_y)&&(mouseY<(acento_y + (54 * size)))) {
    //print("tocaste acento")
    actX = mouseX - acento_x;
    actY = mouseY - acento_y;
    over_acento = true;
  } else if((mouseX > fff_x)&&(mouseX < (fff_x + (192 * size)))&&(mouseY > fff_y)&&(mouseY < (fff_y + (113 * size)))) {
    //print("tocaste fff")
    actX = mouseX - fff_x;
    actY = mouseY - fff_y;
    over_fff = true;
  } else if((mouseX>sostenido_x)&&(mouseX<(sostenido_x + (45 * size)))&&(mouseY > sostenido_y)&&(mouseY < (sostenido_y + (154 * size)))) {
    //print("sostenido")
    actX = mouseX - sostenido_x;
    actY = mouseY - sostenido_y;
    over_sostenido = true;
  }
}

function mouseDragged(){
  if (over_clave){
    clave_sol_x = mouseX - actX;
    clave_sol_y = mouseY - actY;
  } else if (over_cuarto){
    cuarto_x = mouseX - actX;
    cuarto_y = mouseY - actY;
  } else if (over_acento){
    acento_x = mouseX - actX;
    acento_y = mouseY - actY;
  } else if (over_fff){
    fff_x = mouseX - actX;
    fff_y = mouseY - actY;
  } else if (over_sostenido){
    sostenido_x = mouseX - actX;
    sostenido_y = mouseY - actY;
  }
}

function mouseReleased(){
    over_clave = false;
    over_cuarto = false;
    over_acento = false;
    over_fff = false;
    over_sostenido = false;
    //print(actX,actY);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  windowWidth = s_width;
  windowHeight = s_height;
}

//    if (mouseX > clave_sol_x && mouseX < (clave_sol_x - 126) && mouseY > clave_sol_y && mouseY < (clave_sol_y - 341)){
//        print("tocaste clave de sol")
//        } else if(mouseX > cuarto_x && mouseX < (cuarto_x - 62) && mouseY > cuarto_y && mouseY < (cuarto_y - 197)) {
//        print("tocaste cuarto")
//        } else if(mouseX > acento_x && mouseX < (acento_x - 79) && mouseY > acento_y && mouseY < (acento_y - 54)) {
//        print("tocaste acento")
//        } else if(mouseX > fff_x && mouseX < (fff_x - 192) && mouseY > fff_y && mouseY < (fff_y - 113)) {
//        print("tocaste fff")
//        } else if(mouseX > sostenido_x && mouseX < (sostenido_x - 45) && mouseY > sostenido_y && mouseY < (sostenido_y - 154)) {
//        print("sostenido")
//        }