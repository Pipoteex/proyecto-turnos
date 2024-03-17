import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Turnos from "./features/Turnos/Turnos.tsx";
import Opciones from "./features/Opciones/Opciones.tsx";
import Tramites from "./features/tramites/Tramites.tsx";
import Descripcion from "./features/Descripcion/Descripcion.tsx";
import Login from "./features/Login/Login.tsx";
import Formato from "./features/Formato/Formato.tsx";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>Hola fer</div>} />
          <Route path="/turnos" element={<Turnos />} />
          <Route path="/opciones" element={<Opciones />} />
          <Route path="/tramites" element={<Tramites />} />
          <Route path="/descripcion" element={<Descripcion />} />
          <Route path="/login" element={<Login />} />
          <Route path="/formato" element={<Formato />} />

          <Route path="*" element={<div>No existe la pagina</div>} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
