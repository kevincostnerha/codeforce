({
    
    doInit : function(component, event, helper){
        console.log("init completed");
        helper.getAllContacts(component);
    },
    dothis : function(component, event, helper){
        console.log("reached dothis");
        helper.updateList(component);
    }

})