# ConnectX1

Modern SSH management and monitoring application for developers and system administrators.

## Features

### 🖥️ Multi-Session Workspace Management
- Open multiple SSH sessions simultaneously in organized workspaces
- Switch between servers instantly with intuitive session manager
- Each workspace maintains its own tabs for Terminal, SFTP, and Insights

### 💻 Professional Terminal Experience
- Full-featured terminal with xterm.js integration
- Search functionality within terminal output (Ctrl/Cmd+F)
- Auto-reconnect on connection loss
- Support for both SSH and local terminal sessions

### 📁 Dual-Pane SFTP File Manager
- Browse local and remote files side-by-side
- Real-time transfer progress with speed indicators
- Batch operations for multiple files
- File conflict resolution with smart merge options

### 📊 Real-Time Server Insights
- Live system metrics (CPU, Memory, Swap, Network)
- Interactive graphs with historical data
- Service management (start, stop, restart, enable, disable)
- Network connection monitoring
- Support for Linux, macOS, and Windows servers

### 🎨 Code Editor Integration
- Built-in Monaco Editor (VS Code's editor engine)
- Syntax highlighting for 100+ languages
- Edit remote files directly with auto-save
- External editor support (VS Code, Sublime, Atom)
- Unsaved changes protection

### 🗂️ Smart Server Organization
- Organize servers into folders and subfolders
- Quick search across all servers
- Context menu for rapid actions
- Import/export server configurations

### 🔐 Enterprise-Grade Security
- Master password protection with encryption
- Auto-lock feature for idle sessions
- Secure credential storage
- Password strength validation
- No credentials stored in plain text

### 🎨 Customizable Experience
- Dark and Light themes
- 9 beautiful accent colors
- Adjustable zoom levels (50% - 200%)
- Customizable auto-save delays
- Flexible workspace layouts

### 📦 Activity & Transfer Management
- Centralized activity panel for all operations
- Real-time transfer progress tracking
- Comprehensive logging system with filters
- External file management

### ⚡ Performance Optimized
- Lightning-fast startup and operation
- Optimized state management
- Memoized computations for instant search
- Smooth animations and transitions
- Native desktop performance with Tauri

## Tech Stack

- **Frontend:** React 19 + TypeScript + Tailwind CSS
- **Backend:** Rust (Tauri 2.0)
- **Terminal:** xterm.js
- **Editor:** Monaco Editor
- **State Management:** Zustand
- **Charts:** Recharts

## Platform Support

- macOS (Apple Silicon supported; x86 Intel version coming soon)
- Windows 10/11
- Linux (DEB & RPM)

## License

MIT License - Copyright © 2025 ConnectX1
