public with sharing class caseApex {
    public static void CaseTriggerHelp(List<Case> conts) {
        for(Case c : conts){
          if(c.Origin == null){
            c.Origin = 'Web';
          }
        }
    }
}