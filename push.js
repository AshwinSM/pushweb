var push = require('web-push');

let vapid =  {
    "publicKey":"BPWzTVNefiuApmcK67J4H6w5pyJChLmPA2OzhLP_8gZwL1fZqVBD2huW6rRwHYueWO_v7_sTYBKqOUk9bOVABfs",
    "privateKey":"8PANSQGtsQ-CQTQADDqEwhxRugs5yiPHhGob9hdZmzY"
};

push.setVapidDetails('Test Message',vapid.publicKey,vapid.privateKey);

let sub = {};

push.sendNotification(sub, 'Test Notification Message');