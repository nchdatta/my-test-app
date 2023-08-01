import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"
import { Toaster } from "react-hot-toast";
import { ProvideAuth } from "./hooks/useAuth";

function App() {

    return (
        <HelmetProvider>
            <BrowserRouter>
                <Toaster
                    position="top-right"
                    toastOptions={
                        {
                            duration: 3000
                        }
                    }
                    reverseOrder={false} />
                <ProvideAuth>
                    <Routes />
                </ProvideAuth>
            </BrowserRouter>
        </HelmetProvider>
    );
}

export default App;
