//this function is called once page loaded
function setup() {
  noCanvas();

  //set up rivescript
  let bot = new RiveScript();
  bot.loadFile("brain/brain.rive", brainReady, brainError);

  //set up speech
  var speeker = new p5.Speech();

  //when the brain is ready
  function brainReady() {
    console.log('Chatbot ready!');
    bot.sortReplies();
    let reply = bot.reply('local-user');
  }

  //if something goes wrong
  function brainError(error) {
    console.log('Chatbot error: ' + error)
  }

  //select what to update from the HTML
  let button = select('#submit');
  let user_input = select('#user_input');
  let output = select('#output');

  //everytime the sumbit button is pressed look at chat()
  button.mousePressed(chat);

  //handles chat information
  function chat() {
    let input = user_input.value();
    let reply = bot.reply("local-user", input);
    output.html(reply);
    speeker.speak(reply);
  }
}
