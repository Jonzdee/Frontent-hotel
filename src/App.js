import { RouterProvider } from 'react-router-dom';
import { routes } from "./routes/base"
import { ContextProvider } from './context';

function App() {
  return (
    <>
      <ContextProvider>
        <RouterProvider router={routes} />
      </ContextProvider>
    </>
  )
}

export default App;
