// "use server";


 const getDonorList = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/users/donor-list?limit=10`,
      {
        method: 'GET',
        headers: {
           'Content-Type': 'application/json',
        }
     }
    );
  
//     if(!res.ok){
// throw new Error();
//         return 
//       }
      return res;
  };


 const getSingleDonor = async (username:string) => {
  console.log('username', `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/donors/donor-by-username/${username}`)
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/donors/donor-by-username/${username}`,
    {
      method: 'GET',
      headers: {
         'Content-Type': 'application/json',
      }
   }
  );

//     if(!res.ok){
// throw new Error();
//         return 
//       }
    return res;
};

  const donorService={
    getDonorList,
    getSingleDonor
  }

  export default donorService
  