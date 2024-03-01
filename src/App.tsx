import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Turnos from "./features/Turnos/Turnos";

const queryClient = new QueryClient();

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<div>Hola fer</div>} />
                    <Route path="/turnos" element={<Turnos />} />

                    <Route path="*" element={<div>No existe la pagina</div>} />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
}
