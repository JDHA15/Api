async function getData(){
    const url = 'https://rickandmortyapi.com/api/character'
    try {
        const data = await fetch(url);
        if (!data.ok){
            throw new Error ('El error es: ', data.status)//solo funciona en fetch
        }
    } catch (error) {
        
    }
}