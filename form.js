class Form{
    
  constructor() {
    this.input = createInput("Player 1");
    this.input2 = createInput("Player 2");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.input2.hide();
    this.title.hide();
  }

  display(){
    this.title.html("2 Player Fighting Game");
    this.title.position(650,100);
    this.input.position(1300,300);
    this.button.position(800,400);
    this.input2.position(100,300);
    this.button.mousePressed(()=>{
      this.input.hide();
      this.input2.hide();
      this.button.hide();
      player = this.input.value();
      opponent = this.input2.value();
      this.greeting.html("Hello " + player + "Your opponent is" + opponent)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      gameState = 1
      this.title.hide();
      this.greeting.hide();
    });



}

}