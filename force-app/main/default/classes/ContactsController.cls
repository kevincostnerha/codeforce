public class ContactsController {
    @AuraEnabled
    public static List<Storage_Unit__c> get10COntacts()
    {   
        String account = '0015f00000DC0ZpAAL';
        return [SELECT NAME, Nickname__c FROM Storage_Unit__c WHERE Storage_Account__c = :account];       
    }

    @AuraEnabled
    public static List<Storage_Unit__c> get10COntacts(String account)
    {   
        //acount variable is the id, not the name
        return [SELECT NAME, Nickname__c FROM Storage_Unit__c WHERE Storage_Account__c = :account];
    }

    @AuraEnabled
    public static List<Storage_Unit__c> get11COntacts(){
        System.debug('Reached get11 in apex');
        String account = '0015f00000DC0ZpAAL';
        return [SELECT NAME, Nickname__c, CreatedById FROM Storage_Unit__c WHERE Storage_Account__c = :account];     
    }
}