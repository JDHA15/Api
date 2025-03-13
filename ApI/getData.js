import url from "./apiUrl.js";
async function getData(){
    try {
        const data = await fetch(url);
        if (!data.ok){
            throw new Error ('El error es: ', data.status)//solo funciona en fetch
        }
        const dataJson = await data.json();
        console.log(dataJson);
        return dataJson.results;

    } catch (error) {
        console.log(error.message);
    }
}

export default getData;