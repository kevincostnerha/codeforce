public class makeActive {
    public static Storage_Unit__c activate(Storage_Unit__c s){
          if(s.Storage_Account__c == null){
                s.In_Use__c = false;
            }
        else{
            	s.In_Use__c = true;
        	}
        return s;
    }
}