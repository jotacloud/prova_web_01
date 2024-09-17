import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../src/components/Home";
import CriarProfessor from "../src/components/professor/CriarProfessor" 
import ListarProfessor from "../src/components/professor/ListarProfessor";
import EditarProfessor from "../src/components/professor/EditarProfessor";
import ListarAluno from "./components/aluno/ListarAluno";
import CriarAluno from "./components/aluno/CriarAluno";

const router = createBrowserRouter([
    {
        path:"/",
        element: <Home />,
        children: [
            {
                path:"professores/criar",
                element:<CriarProfessor />
            },
            {
                path:"professores/listar",
                element:<ListarProfessor />
            },
            {
                path:"professores/editar/:id",
                element:<EditarProfessor />
            },
            {
                path:"alunos/listar",
                element:<ListarAluno />
            },
            {
                path:"alunos/criar",
                element:<CriarAluno />
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