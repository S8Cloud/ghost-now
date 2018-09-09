const ghost = require('ghost');
ghost().then(function(ghostServer) {
    return ghostServer.start();
})
