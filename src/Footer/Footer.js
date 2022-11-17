
import './footer.css';

export function Footer(){
    return (
        <>
        <footer className="container-fluit g-0 bg-footer mt-5" >
            <div className="row">
                <div className="col-12 col-md-6">
                    <img src="https://firebasestorage.googleapis.com/v0/b/cinerg-2ad15.appspot.com/o/Evanescence-Logo.jpg?alt=media&token=a0bd4a3f-d3a2-4de9-83d9-03de7ebfca00" alt="banner" className="img-fluid w-100 "/>
                </div>
                <div className="col-12 col-md-6 text-white align-self-center d-flex-row justify-content-center">
                    <h2 className='text-center mb-4'>REDES SOCIALES</h2>
                    <ul className='d-flex justify-content-evenly'>
                       
                        <li>
                            <a href='#'>
                                <p>Instagram</p>
                                <img src="https://firebasestorage.googleapis.com/v0/b/cinerg-2ad15.appspot.com/o/new-ig-icon-1.webp?alt=media&token=043f6add-3c06-4c7b-beb9-9d460c3bbc1f" className='redes redesI'/>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <p>faceboock</p>
                                <img src="https://firebasestorage.googleapis.com/v0/b/cinerg-2ad15.appspot.com/o/descarga.png?alt=media&token=bcf764be-1d63-40f6-bdcd-e171657c4e89" className='redes redesf'/>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <p>Twitte</p>
                                <img src="https://firebasestorage.googleapis.com/v0/b/cinerg-2ad15.appspot.com/o/descargat%20(1).png?alt=media&token=2327cd97-8c3b-4dcb-8252-b3c034f43fe6" className=' redest'/>
                            </a>
                        </li>
                    </ul>

                </div>
            </div>

        </footer>
        
        
        </>
    )
}