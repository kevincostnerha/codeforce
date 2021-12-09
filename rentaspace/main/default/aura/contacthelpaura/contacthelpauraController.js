({
    lwcEventHandler : function(component, event, helper) {
        var eventData = event.getParam('v');
        component.set("v.textFromEvent", eventData);
    }
})