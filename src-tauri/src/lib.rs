// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
/// A Tauri command that returns a greeting.
///
/// # Arguments
///
/// * `name` - A string slice that holds the name to greet.
///
/// # Returns
///
/// A string that greets the provided name.
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

/// The main entry point for the Tauri application.
#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .plugin(tauri_plugin_window_state::Builder::new().build())
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
