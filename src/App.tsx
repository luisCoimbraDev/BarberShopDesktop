import "./App.css";
import "./components/login-form"
import { LoginForm } from "./components/login-form";
import { getCurrentWindow } from "@tauri-apps/api/window";
import { bootServer } from "./services/boot"; 




export function CloseButton() {
  return (
    <button
      onClick={() => getCurrentWindow().close()}
      className="absolute right-3 top-3 rounded px-2 py-1 hover:opacity-80"
      aria-label="Fechar"
    >
      ✕
    </button>
  );
}


function App() {
  bootServer();
  return (

    <div className="min-h-[100svh] grid place-items-center p-4">
      <LoginForm />
    </div>

  );
}

export default App;
