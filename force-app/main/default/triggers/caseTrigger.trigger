trigger caseTrigger on Case (before insert, before update) {
    if(Trigger.isBefore){
      if(Trigger.isInsert){
        caseApex.CaseTriggerHelp(Trigger.new);
      }
 
    }
  
  }