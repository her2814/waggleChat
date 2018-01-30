Meteor.startup(()=>{
    
    if(!Rooms.findOne({_id:"MeteorSchool"})){
            var usr1 = Accounts.createUser({
                username : "와글이",
                email : "her29144@naver.com",
                password : "123456"
            });
        
             var usr2 = Accounts.createUser({
                username : "안뇽",
                email : "her2914@naver.com",
                password : "123456"
            });

            Rooms.insert({
                _id:"MeteorSchool",
                name : "MeteorSchool",
                owner:usr1,
                userList:[usr1,usr2],
                createdAt:(new Date()).getTime()
            });
    }
});