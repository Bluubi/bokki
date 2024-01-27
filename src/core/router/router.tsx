import {createBrowserRouter} from "react-router-dom";
import App from "../../App.tsx";
import AddNote from "../../pages/new/note/addNote.page.tsx";

export const routes = [
    { path: '/', element: <><App /></>, children: [
            { path: 'note',  element: <AddNote />},
        ]},

]

//

const router = createBrowserRouter(routes)



export default router;
