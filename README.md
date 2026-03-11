# Drag and Drop Extension

Sharing files from VS Code with other applications was surprisingly inconvenient to incorporate into my daily workflow. This extension solves that by letting you quickly drag files from the VS Code explorer to anywhere you need, using dragon-drop. No more digging through folders, or right click the file then pick open containing folder
, or copying file paths—just select, drag, and go.

**⚠️ This is a work in progress and very much in a very draft state. Expect bugs.**

## Features

- Right-click any file(s) in the VS Code explorer
- Select "drag" from the context menu (in the cut/copy/paste section)
- Files are automatically sent to dragon-drop
- Supports multiple file selection

## Requirements

- `dragon-drop` command must be installed and available in your system PATH


## Build and Install

To build and install the extension from source:

1. **Build the extension:**
	```sh
	npx @vscode/vsce package 
	```

2. **Install the extension in VS Code:**
	```sh
	code --install-extension <generated vsix file>
	```
	Or, for development, use the VS Code command palette:
	- Run `F5` to launch an Extension Development Host
	- Or run `code .` in this directory and use the "Run Extension" launch configuration

This will build the extension and install it into your VS Code environment.

## Usage

1. Select one or more files in the VS Code explorer
2. Right-click and choose "drag" from the context menu
3. The files will be sent to dragon-drop for easy drag and drop functionality

## Marketplace

This is the next step on the todo list for this project.

## Sample Window Manager Configuration

To make drag-and-drop easier when your target application is in another workspace, you can configure your window manager to keep the `dragon-drop` window pinned (always on top or visible across all workspaces). Below is an example for Hyprland:

```ini
windowrule {
	name = drag_drop
	match:class = dragon-drop
	pin = on
}
```

This configuration will:
- Pin the dragon-drop window so it stays visible across all workspaces
- Match the window by its class name (`dragon-drop`)

For other window managers or desktop environments, look for options like "always on top" or "sticky window" in their documentation.
