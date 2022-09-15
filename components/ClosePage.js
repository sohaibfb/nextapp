//this function for closing any page once the close option is selected
export default function ClosePage(pageName,clearinputtype){
    console.log('value: '+pageName);
    document.getElementById(clearinputtype).innerHTML= " ";
    document.getElementById(pageName).style.display = 'none';
    



}