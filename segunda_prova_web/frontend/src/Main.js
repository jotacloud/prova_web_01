import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/Home";
import ListarAluno from "./components/aluno/ListarAluno";
import CriarAluno from "./components/aluno/CriarAluno";
import EditarAluno from "./components/aluno/EditarAluno";
const router = createBrowserRouter([
    {
        path:"/",
        element: <Home />,
        children: [
            {
                path:"alunos/listar",
                element:<ListarAluno />
            },
            {
                path:"alunos/criar",
                element:<CriarAluno />
            },
            {
                path:"alunos/editar",
                element:<EditarAluno />
            },
        ]
    }
])

const Main = () => {
    return (
        <RouterProvider router={router}/>
    )
}
export default Main