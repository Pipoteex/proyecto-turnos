import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Turnos from "./features/Turnos/Turnos.tsx";
import Opciones from "./features/Opciones/Opciones.tsx";
import Tramites from "./features/tramites/Tramites.tsx";
import Descripcion from "./features/Descripcion/Descripcion.tsx";

const queryClient = new QueryClient();

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Turnos />} />
                    <Route path="/turnos" element={<Turnos />} />
                    <Route path="/opciones" element={<Opciones />} />
                    <Route path="/tramites" element={<Tramites />} />
                    <Route path="/descripcion" element={<Descripcion />} />

                    <Route path="*" element={<div>No existe la pagina</div>} />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
}
