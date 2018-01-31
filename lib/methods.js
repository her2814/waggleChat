Meteor.methods({
    insertMessage(messageObject){
        if(Meteor.isClient){
            messageObject["isClient"] = true;
        }
        Messages.insert(messageObject);

        Rooms.update({_id:messageObject.roomId},{$set:{lastMessageTime:messageObject.timestamp}});
    }
});