import {createBrowserRouter} from "react-router-dom";
import App from "../../App.tsx";
import AddNote from "../../pages/new/note/addNote.page.tsx";

const router = createBrowserRouter([
    { path: '/', element: <App />},
    { path: 'new', children: [
            { path: 'note', element: <AddNote />}
        ]}
])

export default router;
