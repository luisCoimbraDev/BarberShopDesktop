// src/Boot.tsx
import { useEffect } from "react";
import { Command } from '@tauri-apps/plugin-shell';

/**
 * A React hook to manage a sidecar process.
 * It starts the sidecar process when the component mounts and kills it when the component unmounts.
 */
function useSidecarApi() {
  useEffect(() => {
    // chama o executável empacotado com uma porta
    const cmd = Command.sidecar('binaries/api', ['--port', '3333'])
    let child: Awaited<ReturnType<typeof cmd.spawn>>

    ;(async () => {
      child = await cmd.spawn()           
      // (opcional) logs do back: remover depois os logs
      cmd.stdout.on('data', (l) => console.log('[api]', l))
      cmd.stderr.on('data', (l) => console.error('[api]', l))
    })()

    return () => {
      child?.kill?.()                     // encerra ao fechar a janela
    }
  }, [])
}


/**
 * A component that boots the sidecar server.
 * It uses the useSidecarApi hook to manage the sidecar process.
 * @returns {null} This component does not render anything.
 */
export function bootServer(){
    useSidecarApi();
    return null;
}
