var http = require('http');
var port = 3000;

var Botkit = require('botkit');
    var controller = Botkit.slackbot();
    var bot = controller.spawn({
    token: 'xoxb-37740112834-cp4LAjC3p5hGQZKQarY0kQQ5'
    })
    bot.startRTM(function(err,bot,payload) {
    if (err) {
            throw new Error('Could not connect to Slack');
    }
    });

    controller.hears(["world","^pattern$"],["direct_message","direct_mention","mention","ambient"],function(bot,message) {
  // do something to respond to message
  // all of the fields available in a normal Slack message object are available
  // https://api.slack.com/events/message
  bot.reply(message,'You used a keyword!');
  bot.say("howdy")
});

    
http.createServer(function(req, res) {
      res.writeHead(200, {
            'Content-Type': 'text/plain'
      });


    


      res.end("Hello world");
}).listen(port);