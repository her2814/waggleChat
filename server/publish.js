Meteor.publish("roomList",function(){
        return Rooms.find();
});

Meteor.publish("messages",function(roomId,count){
        if(!roomId){
                console.error("채팅방 식별자 부재",count);
                return [];
        }
        else{
                return Messages.find({roomId:roomId},{sort:{timestamp:-1},limit:count});
        }
})