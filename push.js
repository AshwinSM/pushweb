var push = require('web-push');

let vapid =  {
    "publicKey":"BPWzTVNefiuApmcK67J4H6w5pyJChLmPA2OzhLP_8gZwL1fZqVBD2huW6rRwHYueWO_v7_sTYBKqOUk9bOVABfs",
    "privateKey":"8PANSQGtsQ-CQTQADDqEwhxRugs5yiPHhGob9hdZmzY"
};

push.setVapidDetails('mailto:test@code.co.uk',vapid.publicKey,vapid.privateKey);

// let sub = {
//     endpoint:"https://fcm.googleapis.com/fcm/send/eXN-PrLyO9s:APA91bGJCb1_aVFMUwFVe5xV8WAfxZhBuuCrF8HsmJXYvyIOJXIuoBhkc9ks2fAwZbhMVS2inPxOrAk3PT3T2v1BkypW1lMti_CbZ1prBgAsHRe3IrJAj1iGnLQzAD_aUZ6qkrlq0P4C",
//     expirationTime:null,
//     keys:{
//         p256dh:"BItxqTvyoPh0M-SM2IfU--AwZJFT_lYfIxzY5IDUIABAm4g0mcj1ADE43sdIuVXTnswXUrkDJJC8dxPWOF7feK0",
//         auth:"Fr9Iaso_0_rWcn70mIWH9w"
//     }
// }

// let sub =  {
//     endpoint:"https://fcm.googleapis.com/fcm/send/csxCQBtmWv4:APA91bEJxVBvjAmYWK0ZXPHevMU1npZmVdX6CVybz01WMVE3Nhn8wcKFLLMg_7ghmCQvIlBiOPCBLl9_O2H5f4O8xM_ulZZR7TKuKaHlh99-TJ-ZcvohmwRgY9vBBHRLm6Q8FxqR9Qq_",
//     expirationTime:null,
//     keys:{
//         p256dh:"BOPbJptS4pmG4J_bIM4x5q6B6T6c05z5PFNfHELgl6zHK0w4NicjAr_q7VxLNKHI2PPHKjQ0Slllcjs1VayWKWE",
//         auth:"ETGDdwi_LJAcjoOL9c8cQQ"
//     }
// }


let sub = 
{
    endpoint:"https://fcm.googleapis.com/fcm/send/fDXJaiMk8Is:APA91bEJas3-L1f9AFj-spz-kTASM_uGSA7mo8IkUyqw4OKdYj-LtrM9nSBl-sbn6UpvS4irw35LYL4XM-fQPfAakMkvGv_tAveMJesTB0KxpZ_XoO5ro0HZFClqJvkOHhY0UDYs9TZv",
    expirationTime:null,
    keys:{"p256dh":"BFlNFdALUM_GDXWlKMN9eLZk_ggzKgQF4XejTy9WNjbaINWNn40Zx2lmnhwluxqQyQVXCPP8tDnfZe1Lxblrnao",
    auth:"yaSeG0bYQF-n8p6mobzxTw"
    }
}

push.sendNotification(sub, 'Test Notification Message');