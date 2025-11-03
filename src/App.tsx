import "./App.css";
import "./components/login-form"
import { LoginForm } from "./components/login-form";
import { getCurrentWindow } from "@tauri-apps/api/window";
import { bootServer } from "./services/boot"; 




/**
 * A button that closes the current Tauri window.
 * @returns {JSX.Element} The rendered button component.
 */
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

/**
 * The main application component.
 * It boots the server and renders the LoginForm.
 * @returns {JSX.Element} The rendered application component.
 */
function App() {
  bootServer();
  return (

    <div className="min-h-[100svh] grid place-items-center p-4">
      <LoginForm />
    </div>

  );
}

export default App;
