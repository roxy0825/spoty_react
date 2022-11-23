export async function servicioCanciones(){
    const URI="https://api.spotify.com/v1/artists/0p4nmQO2msCgU4IF37Wi3j/top-tracks?market=us"
    const TOKEN="Bearer BQA8NHLq4YwoWLBYTcUcbl6adRt5FKOg7E7LXYAuBOcUHlCUnnY1Oq6cFeNDh1AB6au5fNY5jpd8XYv4kKtomBT6gsSPPKADbHFa82lnZwaAueajIE3GSoPHKPPJxFYcthYGzpfFZTKjCv9yTaBSVgSRU8xwHBCDmMqzXiUlzykhgymcHnEPYUyayaRWxD__y70"
    const PETICION={
        method: "GET",
        headers:{Authorization:TOKEN}
    }
    let respuesta= await fetch(URI,PETICION)

    let canciones = await respuesta.json()

    return canciones
}