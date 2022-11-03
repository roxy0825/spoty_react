import{Historia} from "../Historia/Historia";
import{Home} from "../Home/Home";
import { Routes, Route, Link} from "react-router-dom";
import{Integrante} from "../Integrantes/Integrante";
import { Menu } from "../Menu/Menu";

export function Rutas(){
    return (
        <div className="App">
         <Menu></Menu>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="historia" element={<Historia />} />
            <Route path="integrantes" element={<Integrante />} />
          </Routes>
        </div>
      );

}