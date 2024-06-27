import { RouterProvider } from 'react-router-dom';
import { routes } from "./routes/base"
import { ContextProvider } from './context';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <>
      <AuthProvider>
        <ContextProvider>
          <RouterProvider router={routes} />
        </ContextProvider>
      </AuthProvider>
    </>
  )
}

export default App;
