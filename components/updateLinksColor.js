

export default function updateLinksColor(mainpath,pathname, subpath) {


  var links = document.querySelectorAll('a[title=MenuLinks]');
  for (var i = 0; i < links.length; i++) {
    links[i].style.color = 'black';
  }

  document.getElementById(pathname).style.color = '#0099ff';



  switch (mainpath) {


    case '1':

      switch (subpath) {


        case '1':

          document.getElementById('PersonalSettings').style.color = '#0099ff';

          break;

        case '2':
          document.getElementById('EmploymentSettings').style.color = '#0099ff';

          break;

        case '3':
          document.getElementById('FinancialSettings').style.color = '#0099ff';

          break;

        case '4':
          document.getElementById('StructureSettings').style.color = '#0099ff';

          break;


      }

      break;


    case '2':
      switch (subpath) {


        case '1':

          document.getElementById('EmployeeTransactions').style.color = '#0099ff';

          break;

        case '2':
          document.getElementById('EOSTransactions').style.color = '#0099ff';

          break;

        case '3':
          document.getElementById('FinancialSettings').style.color = '#0099ff';

          break;

        case '4':
          document.getElementById('StructureSettings').style.color = '#0099ff';

          break;


      }
      break;

  }

  /* switch (code) {
 
     case '1':
 
       document.getElementById('PersonalSettingsLink').style.color = '#0099ff';
       document.getElementById('NationalityLink').style.color = '#0099ff';
       break;
 
     case '2':
       document.getElementById('PersonalSettingsLink').style.color = '#0099ff';
       document.getElementById('ReligionLink').style.color = '#0099ff';
       break;
 
     case '3':
       document.getElementById('PersonalSettingsLink').style.color = '#0099ff';
       document.getElementById('HomeCountryLink').style.color = '#0099ff';
       break;
 
     case '4':
       document.getElementById('EmploymentSettingsLink').style.color = '#0099ff';
       document.getElementById('PositionsLink').style.color = '#0099ff';
       break;
 
     case '5':
       document.getElementById('StructureSettingsLink').style.color = '#0099ff';
       document.getElementById('FunctionsLink').style.color = '#0099ff';
       break;
 
     case '6':
       document.getElementById('StructureSettingsLink').style.color = '#0099ff';
       document.getElementById('SectionsLink').style.color = '#0099ff';
       break;
 
     case '7':
       document.getElementById('StructureSettingsLink').style.color = '#0099ff';
       document.getElementById('LocationsLink').style.color = '#0099ff';
       break;
 
 
     case '8':
       document.getElementById('FinancialSettingsLink').style.color = '#0099ff';
       document.getElementById('AllowancesLink').style.color = '#0099ff';
       break;
 
     case '9':
       document.getElementById('FinancialSettingsLink').style.color = '#0099ff';
       document.getElementById('AllowancesLink').style.color = '#0099ff';
       break;
 
 
     case '10':
       document.getElementById('FinancialSettingsLink').style.color = '#0099ff';
       document.getElementById('AllowancesLink').style.color = '#0099ff';
       break;
 
 
 
     case '11':
       document.getElementById('FinancialSettingsLink').style.color = '#0099ff';
       document.getElementById('AllowancesLink').style.color = '#0099ff';
       break;
 
 
     case '12':
       document.getElementById('FinancialSettingsLink').style.color = '#0099ff';
       document.getElementById('AllowancesLink').style.color = '#0099ff';
       break;
 
 
     case '13':
       document.getElementById('FinancialSettingsLink').style.color = '#0099ff';
       document.getElementById('AllowancesLink').style.color = '#0099ff';
       break;
 
   }*/






}