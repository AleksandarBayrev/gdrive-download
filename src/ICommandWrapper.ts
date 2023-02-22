export type CommandOptions = {
    outputToCLI: boolean;
}
export interface ICommandWrapper {
    hasCommand(command: string): boolean;
    executeCommand(command: string, options: CommandOptions): void;
}