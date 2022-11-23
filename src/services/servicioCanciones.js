export async function servicioCanciones(){
    const URI="https://api.spotify.com/v1/artists/5nGIFgo0shDenQYSE0Sn7c/top-tracks?market=us"
    const TOKEN="Bearer BQADGIOPmHhKAd0Ic07nndIuOcQvtXzwFnYa7nK7r2Ie7GlrVLO4WU4Gamu5EDG64-feAuINI-JkcAm832MBQraKo4C8oVs0SaaUfyNrdV3B3e3k-XLG7CcQw_0bgnOrNZvBCvZ0hjHc2biHe2jBaspFavKUiaaK15YHALD0UbPbjzSa1KhJn4cwLKe8j0be7WY"
    const PETICION={
        method: "GET",
        headers:{Authorization:TOKEN}
    }
    let respuesta= await fetch(URI,PETICION)

    let canciones = await respuesta.json()

    return canciones
}