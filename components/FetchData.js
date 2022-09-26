//this function for loading and updating data in database
export default async function FetchData(link, type, data,connectionwithcode) {

  var result=[];

  switch (connectionwithcode) {

    case false:{

      console.log('connection without data condition');

       result = await fetch(link, {

        method: type,
        
      
        headers: {
         // 'Content-Type': 'application/json',
          
  
        },
  
      })
      

    }

      break;

    case true:{

      console.log('connection wtih data condition');

       result = await fetch(link, {

        method: type, 
      
    
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          //'User-Agent': 'ANYTHING_WILL_WORK_HERE'
          
         
        },
     //   referrerPolicy: 'no-referrer',
  

        body: JSON.stringify(data),

      })
      console.log('connection data again');
    }
    break;
    


  }

  return  result;

}