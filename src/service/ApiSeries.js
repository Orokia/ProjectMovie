const seriesData = async (films, page =1)=>{
    try{
        const reponse = await fetch(`https://api-media-ipssi.julienpoirier-webdev.com/api/tv/search?query=${films}&page=${page}`);
    
    const data = await reponse.json();
         return (data);
         
    }catch(error){
        return { error }
    }
    

  };

  export{seriesData};

  