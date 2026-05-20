PImage img;
float scaleFactor = 0.32  ;
int w,h;
void setup() {
  size(1500, 830);        // full dimensions
  img = loadImage("ffvii-themes.png");  // put PNG in /data folder
  w = int(img.width * scaleFactor); 
  h = int(img.height * scaleFactor);
}

void draw() {
  background(0);
  image(img, 0, 0,w,h);
}

void mousePressed() {
  println("mouseX: " + mouseX + ", mouseY: " + mouseY);
}
