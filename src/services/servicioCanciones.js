export async function servicioCanciones(){
    const URI="https://api.spotify.com/v1/artists/5nGIFgo0shDenQYSE0Sn7c/top-tracks?market=us"
    const TOKEN="Bearer BQD33wslARqhvxE1Ja71tzmBaRddGLZv4uVaXjKw3bF4QNH_BXB4DGf_i6H_yM4-Mb22bprtNOEWlM7p-r5rsomfVOuhWYiS3Ni3lG5d1JDvw_GQKDQPtEtqlE7hzmcpfw5zNYfiPR7wk9-WC18k2wC06x8BtcCSgXh60Fkv0h2oV-kuWEV7R3xBQLLbwO5Un9Q"
    const PETICION={
        method: "GET",
        headers:{Authorization:TOKEN}
    }
    let respuesta= await fetch(URI,PETICION)

    let canciones = await respuesta.json()

    return canciones
}