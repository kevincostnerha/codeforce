@isTest
public class TestCaseApex {
	@isTest static void isCaseNULL() {
        Test.startTest();
        
        Case case01 = new Case();
        insert case01;
        System.assertEquals(case01.Origin, NULL);
        
        Test.stopTest();
    }
    
    @isTest static void isCaseNotNULL() {
        Test.startTest();
        
        Case case01 = new Case(Origin='Web');
        insert case01;
        System.assertEquals(case01.Origin, 'Web');
        
        Test.stopTest();
    }
}