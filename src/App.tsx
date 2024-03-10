import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Turnos from "./features/Turnos/Turnos.tsx";
import Opciones from "./features/Opciones/Opciones.tsx";

const queryClient = new QueryClient();

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Turnos />} />
                    <Route path="/turnos" element={<Turnos />} />
                    <Route path="/opciones" element={<Opciones />} />

                    <Route path="*" element={<div>No existe la pagina</div>} />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
}
