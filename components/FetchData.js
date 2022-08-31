//this function for loading and updating data in database
export default  async  function  FetchData(link,type,data){
    

    const res = await fetch(link, {

        method: type, // or 'PUT'
        mode: 'cors',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Type': 'multipart/form-data',
          'Accept': 'application/json',
          'Accept': 'application/x-www-form-urlencoded',
          'Accept': 'multipart/form-data',
          //'Access-Control-Allow-Origin': '*',
          'User-Agent': 'ANYTHING_WILL_WORK_HERE'
          //'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36 Edg/96.0.1054.62'
        },
        referrerPolicy: 'no-referrer',

        body: JSON.stringify(data),

      })

      return res;




}