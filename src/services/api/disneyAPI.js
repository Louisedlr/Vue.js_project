const get_disney_data= async function(current_page){ 
    current_page  = current_page +1;
    const response = await fetch('https://api.disneyapi.dev/characters?page='+ current_page)
    if(response.status ==200)
    {
        //console.log(await response.json())
        return response.json()
    }else{
        new Error(response.statusText)
    }
}

export default get_disney_data