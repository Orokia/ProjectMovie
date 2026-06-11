const filmsData = async (films, page =1)=>{
    try{
        const reponse = await fetch(`https://api-media-ipssi.julienpoirier-webdev.com/api/movies/search?query=${films}&page=${page}`);
    
    const data = await reponse.json();
         return (data);
         
    }catch(error){
        return { error }
    }
    

  };

  export{filmsData};

  