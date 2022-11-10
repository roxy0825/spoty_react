export function Integrante(){
    let integrantes=[
        {
            Nombre:"Amy Lee",
            Instrumento:"Vocalista- Piano",
            Edad:"40 años",
            Fotografia:"https://firebasestorage.googleapis.com/v0/b/cinerg-2ad15.appspot.com/o/amy-lee.jpg?alt=media&token=86876c92-3d8a-4a94-ab01-256219ee9651"
        },
        {
            Nombre:"Will Hunt",
            Instrumento:"Bateria",
            Edad:"51 años",
            Fotografia:"https://firebasestorage.googleapis.com/v0/b/cinerg-2ad15.appspot.com/o/Will_Hunt.jpg?alt=media&token=48ccc576-a0b0-4047-9e7e-7afe3226196e"
        },
        {
            Nombre:"Jen Majura",
            Instrumento:"Bajista",
            Edad:"39 años",
            Fotografia:"https://firebasestorage.googleapis.com/v0/b/cinerg-2ad15.appspot.com/o/jen-majura.jpg?alt=media&token=f3eb57bc-c562-4b9b-8800-7623ab28cad7"
        },
        {
            Nombre:"Troy McLawhorn",
            Instrumento:"Guitarrista",
            Edad:"54 años",
            Fotografia:"https://firebasestorage.googleapis.com/v0/b/cinerg-2ad15.appspot.com/o/Troy%20McLawhorn.jpeg?alt=media&token=c1e290c9-35c5-428b-877c-45f747468bb9"
        }
    ]
    return(
        <div className="row row-cols-1 row-cols-md-4 g-0 mt-5">
            {
                integrantes.map(function(integrante){
                    return(
                        <>
                            <div className="col mt-3">
                                <div className="card h-100">
                                    <img src={integrante.Fotografia} alt="foto" className="img-fluit w-100 h-100"/>
                                    <h4 className="text-center fw-bold">Nombre: {integrante.Nombre}</h4>
                                    <br/>
                                    <h5 className="text-center">Edad: {integrante.Edad}</h5>
                                    <h5 className="text-center">Rol: {integrante.Instrumento}</h5>


                                </div>
                            </div>
                        </>
                    )
                })
            }

        </div>
    )
}