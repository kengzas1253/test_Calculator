const Sentry = require('@sentry/node');
Sentry.init ({ dsn: 'https://2d9367f5c28c4916a9c7fc87d30396cf@sentry.io/1814037' });
Sentry.configureScope(function(scope) {
    scope.setTag("5735512153", "Naratip Thongtaluang");
    scope.setUser({
      email: "kengzas1253@SpeechGrammarList.com",
      username: 'kengzas1253'
    });
   });

myUndefinedFunction();