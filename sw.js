self.addEventListener('push', ()=>{
    self.registration.sendNotification('Test SW Notification Message', {});
});