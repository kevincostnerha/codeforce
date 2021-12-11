trigger StorageUnitTrigger on Storage_Unit__c (before insert) {
    for(Storage_Unit__c s: trigger.new) {
        s.Size__c = s.Length__c + ' Feet Long and ' + s.Width__c + ' Feet Wide.';
        }
}