
import { CommandWrapper } from './CommandWrapper';
import { ICommandWrapper } from './ICommandWrapper';
const command = 'wget';
const fileId = process.argv[2];
const fileName = process.argv[3];
((commandWrapper: ICommandWrapper) => {
    if (!commandWrapper.hasCommand('wget')) {
        console.error('wget not found');
        return;
    }
    if (!fileId || !fileName) {
        console.error('Command syntax: node gdrive-download.js FILE_ID OUTPUT_FILE_NAME');
        return;
    }
    console.log(`Downloading ${fileId}, saving to ${fileName}`);
    commandWrapper.executeCommand(`${command} --no-check-certificate 'https://docs.google.com/uc?export=download&id=${fileId}' -O ${fileName}`, {outputToCLI: true});
})(new CommandWrapper());