var morgan = require('morgan'); //Logging helper
var fs = require('fs');
var path = require('path');
var rfs = require('rotating-file-stream');

function setupAccessLog(app){
    console.log("STARTED - MIDDLEWARE - Setup Access Log");
    
    var logDirectory = path.join(__dirname, 'logs');
    fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);
    
    var accessLogStream = rfs('api_access.log', {
      interval: '1d', // rotate daily
      path: logDirectory
    });
    
    //morgan.token('id', (req) -> req.id.split('-')[0]);
    
    //Complete access log to file RUBY Style
    //app.use(morgan("[:date[iso] #:id] Started :method :url in HTTP/:http-version for :remote-addr - :remote-user", immediate: true, {stream: accessLogStream}));
    //app.use(morgan("[:date[iso] #:id] Completed :status :res[content-length] in :response-time ms", {stream: accessLogStream}));
    app.use(morgan("[:date[iso]] Completed :status :res[content-length] in :response-time ms", {stream: accessLogStream}));
    
    //Dev log to console
    //app.use(morgan('[:date[iso] #:id] :method :url for :remote-addr - :remote-user with HTTP :status in :response-time ms'));    
    app.use(morgan('[:date[iso]] :method :url for :remote-addr - :remote-user with HTTP :status in :response-time ms'));
    
    console.log("COMPLETED - MIDDLEWARE - Setup Access Log");

};

function enableCORS(app){
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, session_token");
    next();
  });
};

module.exports.setupAccessLog = setupAccessLog;
module.exports.enableCORS = enableCORS;