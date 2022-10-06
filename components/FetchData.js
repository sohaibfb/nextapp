//this function for loading and updating data in database
export default async function FetchData(link, type, data,connectionwithcode) {

  var result=[];

  switch (connectionwithcode) {

    case false:{

      console.log('connection without data condition');

       result = await fetch(link, {

        method: type,
        
      
     //   headers: {
         // 'Content-Type': 'application/json',
          
  
       // },
  
      })
      

    }

      break;

    case true:{


      console.log('connection with data condition');

       result = await fetch(link, {

        method: type, 
      
    

        body: JSON.stringify(data),

      })
      console.log('connection data again');
    }
    break;
    


  }

  return  result;

}