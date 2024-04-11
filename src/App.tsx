import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Bienvenida from "./features/Bienvenida/Bienvenida.tsx";
import TomarTurno from "./features/TomarTurno/TomarTurno.tsx";

import TurnoActuales from "./features/TurnosActuales/TurnosActuales.tsx";
import Login from "./features/Login/Login.tsx";
import Admin from "./features/Admin/Admin.tsx";
import Historial from "./features/Historial/Historial.tsx";
import PaginaNoExistente from "./features/PaginaNoExistente/PaginaNoExistente.tsx";
import Tramites from "./features/Tramites/Tramites.tsx";
import { useState } from "react";

const queryClient = new QueryClient();

export default function App() {
    /* const [state, setstate] = useState(false); */

    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Bienvenida />} />
                    <Route path="/tomar_turno" element={<TomarTurno />} />
                    <Route path="/tramites" element={<Tramites />} />
                    <Route
                        path="/turnos_actuales"
                        element={<TurnoActuales />}
                    />
                    <Route path="/login" element={<Login />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/historial" element={<Historial />} />
                    <Route path="*" element={<PaginaNoExistente />} />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
}
