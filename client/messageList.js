Template.messageList.onCreated(function(){
    var inst = this;
    inst.messageSub = inst.subscribe("messages",Session.get("currentRoom"),30);
});

Template.messageList.onDestroyed(function(){
    var inst = this;
    inst.messageSub.stop();
});

Template.messageList.helpers({
    messages() {
        return Messages.find({},{sort:{timestamp:1}});
    }
});