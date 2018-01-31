Template.messageList.onCreated(function(){
    var inst = this;
    Session.set("limit",30);
    inst.subcnt = 0;
    Tracker.autorun(function(){
        inst.messageSub = inst.subscribe("messages",Session.get("currentRoom"),Session.get("limit"),
        function(){
            if(inst.subcnt==0){
                inst.subcnt=1;
                $('.panel-body').scrollTop($('.chat').height());
            }
        });
        inst.subscribe("room",Session.get("currentRoom"),function(){
            Rooms.find({_id:Session.get("currentRoom")}).observe({
                changed:function(newDoc,oldDoc){
                    $('.panel-body').scrollTop($('.chat').height());
                }
            });
        });
    });

});

Template.messageList.onRendered(function(){
    var staticSize = 90;
    /* 스크롤 유지 */
    $(".panel-body").height($(window).height() - staticSize);
    /* 윈도 크기가 변경되도 유지 */
    $(window).resize(function(){
        $(".panel-body").height($(window).height()-staticSize);
    });

    $(".panel-body").scroll(function(){
        if($(".panel-body").scrollTop() == 0){
            $(".panel-body").scrollTop(100);
            Session.set("limit",Session.get("limit")+10);
        }
    })
})

Template.messageList.onDestroyed(function(){
    var inst = this;
    inst.messageSub.stop();
});

Template.messageList.helpers({
    messages() {
        return Messages.find({},{sort:{timestamp:1}});
    }
});