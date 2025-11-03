// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

/// The entry point of the application.
fn main() {
    barbershop_lib::run()
}
