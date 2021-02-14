if (typeof document === "undefined") {
    throw "Document not found"
}

if (typeof window === "undefined") {
    throw "Window object not found"
}

if (!window.Livewire) {
    throw "Livewire script is required to be loaded. use defer"
}