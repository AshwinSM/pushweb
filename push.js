var push = require('web-push');

let vapid =  {
    "publicKey":"BPWzTVNefiuApmcK67J4H6w5pyJChLmPA2OzhLP_8gZwL1fZqVBD2huW6rRwHYueWO_v7_sTYBKqOUk9bOVABfs",
    "privateKey":"8PANSQGtsQ-CQTQADDqEwhxRugs5yiPHhGob9hdZmzY"
};

push.setVapidDetails('mailto:test@code.co.uk',vapid.publicKey,vapid.privateKey);

let sub = {
    endpoint:"https://fcm.googleapis.com/fcm/send/eXN-PrLyO9s:APA91bGJCb1_aVFMUwFVe5xV8WAfxZhBuuCrF8HsmJXYvyIOJXIuoBhkc9ks2fAwZbhMVS2inPxOrAk3PT3T2v1BkypW1lMti_CbZ1prBgAsHRe3IrJAj1iGnLQzAD_aUZ6qkrlq0P4C",
    expirationTime:null,
    keys:{
        p256dh:"BItxqTvyoPh0M-SM2IfU--AwZJFT_lYfIxzY5IDUIABAm4g0mcj1ADE43sdIuVXTnswXUrkDJJC8dxPWOF7feK0",
        auth:"Fr9Iaso_0_rWcn70mIWH9w"
    }
}

push.sendNotification(sub, 'Test Notification Message');