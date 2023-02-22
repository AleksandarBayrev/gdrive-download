import { CommandOptions, ICommandWrapper } from "./ICommandWrapper";
import commandExists from "command-exists";
import { execSync } from 'child_process';

export class CommandWrapper implements ICommandWrapper {
    hasCommand(command: string): boolean {
        return commandExists.sync(command);
    }
    executeCommand(command: string, options: CommandOptions): void {
        try {
            execSync(command, {
                stdio: options.outputToCLI ? 'inherit' : 'ignore'
            });
        } catch(error) {
            if (!options.outputToCLI) {
                console.error(error);
            }
        }
    }

}