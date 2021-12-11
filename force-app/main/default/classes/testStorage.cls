@isTest
public class testStorage {
    @isTest static void testStorageController(){
        //tests the response class for the apex trigger associated with it. 
        System.debug(getStorageUnitDataController.getStorageUnits());
    }
    @isTest static void testContactsController(){
        //test base method
        System.debug(ContactsController.get10COntacts());
        //test overloaded version that takes account name
        System.debug(ContactsController.get10COntacts('Dickenson plc'));
        //tests the secondary method 
        System.debug(ContactsController.get11COntacts());
    }
     @isTest static void testTriggersBlank(){
        Storage_Unit__c storage = new Storage_Unit__c();
        insert storage;
        update storage;
        delete storage;
    }
     @isTest static void testTriggersFull(){
        Storage_Unit__c storage = new Storage_Unit__c();
        storage.Storage_Account__c = '0015f00000DC0ZpAAL';
        insert storage;
        storage.Storage_Account__c = '0015f00000DC0ZpAAL';
        update storage;
         
    }
}