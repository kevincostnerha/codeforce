@isTest public class testStorageUnitTrigger {
    @isTest static void testTrigger(){
        Test.startTest();
		Storage_Unit__c storage = new Storage_Unit__c();
        storage.Storage_Account__c = '0015f00000DC0ZpAAL';
        storage.Storage_Location__c = 'a015f00000Ej3TAAAZ';
        storage.Width__c = 5;
        storage.Length__c = 5;
        
        insert storage;
        Test.stopTest();
    }
}