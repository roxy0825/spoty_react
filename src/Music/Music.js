
import { servicioCanciones } from "../services/servicioCanciones"

//necesito usar el hook USESTATE
//PARA ALMACENAR LA RESPUESTA DEL SERVICIO DE FORMA GLOBAL
import { useState,useEffect } from "react"


export function Music(){

    //creando mi primer USESTATE

    const[canciones,setCanciones] = useState(null)
    const[estamosCargando,setEstamosCargando]=useState(true)

//usando mi primer useEffect
useEffect(function(){

    servicioCanciones()
 .then(function(respuesta){
    setCanciones(respuesta)
    setEstamosCargando(false)
 })

},[])

console.log(canciones)

if(estamosCargando==true){

    return(
        <>
        <h1>Estamos Cargando...</h1>
        </>
    )


}else{
        return(
    <>
        <h1>Estamo listas las canciones</h1>

            <div className="container">
                <div className="row">
                {
                    canciones.tracks.map(function(cancion){
                        return(

                            <div className="col-12 col-md-4">
                                <h5>{cancion.name}</h5>
                                <img src={cancion.album.images[1].url} />
                                <audio src={cancion.preview_url} controls="controls"></audio>
                            </div>
                            
                        )
                    })
                }
                </div>
            </div>

        
        </>
        )
}
}