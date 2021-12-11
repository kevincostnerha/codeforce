({
	getAllContacts : function(component, event, helper) {
		var action = component.get("c.get10COntacts");
        action.setCallback(this, function(a){
            component.set("v.contactRows", a.getReturnValue());
        });
        $A.enqueueAction(action);
	},

    updateList : function(component, event, helper) {
        console.log("reached update list");
        var action = component.get("c.get11COntacts");
        action.setCallback(this, function(a){
            component.set("v.contactRows", a.getReturnValue());
        });
        $A.enqueueAction(action);
    }
})