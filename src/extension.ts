// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { spawn } from 'child_process';


// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('drag-and-drop.runCommandOnFile', async (uri: vscode.Uri, selectedUris?: vscode.Uri[]) => {
		// uri is the file clicked, selectedUris if multiple files are selected
		const files = selectedUris && selectedUris.length ? selectedUris : [uri];
		const args = files.map(file => file.fsPath);
		spawn('ripdrag', args, { detached: true, stdio: 'ignore' });
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
