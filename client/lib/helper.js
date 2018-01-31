Template.registerHelper("currentMode",()=>{
    if(!Session.get("viewMode")) Session.set("viewMode","chatMain");
    return Session.get("viewMode");
});

Template.registerHelper("ago",(timestamp)=>{
    return moment(timestamp).fromNow();
})