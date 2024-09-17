import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/Home";
import CriarProfessor from "./components/professor/CriarProfessor" 
import ListarProfessor from "./components/professor/ListarProfessor";
import EditarProfessor from "./components/professor/EditarProfessor";
import ListarAluno from "./components/aluno/ListarAluno";
import CriarAluno from "./components/aluno/CriarAluno";

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
        ]
    }
])

const Main = () => {
    return (
        <RouterProvider router={router}/>
    )
}
export default Main