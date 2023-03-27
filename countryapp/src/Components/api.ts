export const getcountry = (e:any) => {
    return fetch(`https://restcountries.com/v3.1/name/${e}`).then((resp) => {
      if (resp.status === 200)  
      {

         return resp.json();
      }
      else throw new Error("Invalid response");
    });
  };




  