//this function for loading and updating data in database
export default async function FetchData(link, type, data,connectionwithcode) {

  var result=[];

  switch (connectionwithcode) {

    case false:{



       result = await fetch(link, {

        method: type,
        
      
     //   headers: {
         // 'Content-Type': 'application/json',
          
  
       // },
  
      })
      

    }

      break;

    case true:{


     

       result = await fetch(link, {

        method: type, 
      
    

        body: JSON.stringify(data),

      })
  
    }
    break;
    


  }

  return  result;

}