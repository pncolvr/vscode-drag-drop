// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('drag-and-drop.runCommandOnFile', async (uri: vscode.Uri, selectedUris?: vscode.Uri[]) => {
		// uri is the file clicked, selectedUris if multiple files are selected
		const files = selectedUris && selectedUris.length ? selectedUris : [uri];
		const terminal = vscode.window.createTerminal("drag-and-drop-terminal");
		terminal.show();

		// Create space-separated list of file paths wrapped in single quotes
		const filePaths = files.map(file => `'${file.fsPath}'`).join(' ');
		terminal.sendText(`dragon-drop ${filePaths}`);
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
