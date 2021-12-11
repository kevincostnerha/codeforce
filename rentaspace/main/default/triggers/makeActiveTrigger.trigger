trigger makeActiveTrigger on Storage_Unit__c (before insert, before update) {
	for(Storage_Unit__c s: trigger.new) {
      		makeActive.activate(s);
        }
}