// src/Boot.tsx
import { useEffect } from "react";
import { Command } from '@tauri-apps/plugin-shell';

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


export function bootServer(){
    useSidecarApi();
    return null;
}
