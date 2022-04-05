
export default function updateLinksColor1(path, code){


    var links = document.querySelectorAll('a[title=MenuLinks]');
    for (var i = 0; i < links.length; i++) {
      links[i].style.color = 'black';
    }
  
    switch (code) {
  
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
  
    }
  
  
  
  
  
  
  }