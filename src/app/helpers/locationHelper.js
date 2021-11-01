
export   const getPage = (url) => {

  const pageArray = ['home', 'features', 'main' , 'twoParty' , 'personal' , 'journal' , 'work' , 'reports' , 'notices' , 'info' , 'spotlight'] 
  // let joy = url.pathname.includes('personal') 
  // console.log('[locationHelper] - personal clicked' , joy)


  // let joy = url.pathname
  // console.log('[locationHelper] - url path ... ' , joy)
  // console.log('[locationHelper] - personal clicked' , joy.includes('personal'))
  let thisPage

  if(url.pathname.includes('home') ) {
    thisPage = 'home'
    return(thisPage)
    
  }else if(url.pathname.includes('features') ){
    thisPage = 'features'
    return(thisPage)


  }else if(url.pathname.includes('join') ){
    thisPage = 'join'
    return(thisPage)

  }else if(url.pathname.includes('main') ){

    // console.log('[locationHelper] - main exists')
   


    if(url.pathname.includes('journal') ){
      thisPage = 'journal'
      return(thisPage)

    }else if(url.pathname.includes('spotlight') ){

    
      thisPage = 'spotlight'
      return(thisPage)



    }else{
      thisPage = 'home'
      return(thisPage)
    }

    
  }else{
    thisPage = 'home'
    return(thisPage)
  }


}
