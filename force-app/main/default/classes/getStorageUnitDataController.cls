public with sharing class getStorageUnitDataController {
	@AuraEnabled(cacheable=true)
    public static List<rentaspace__Storage_Unit__c> getStorageUnits() {
        return [SELECT Id FROM rentaspace__Storage_Unit__c];
    }
}