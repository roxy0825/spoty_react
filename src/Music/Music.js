
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

        {
            canciones.tracks.map(function(cancion){
                return(

                    <h5>{cancion.name}</h5>
                    
                )
            })
        }
        </>
        )
}
}