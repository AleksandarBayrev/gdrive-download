import { execSync } from 'child_process';
import commandExists from 'command-exists';
const command = 'wget';
const fileId = process.argv[2];
const fileName = process.argv[3];
(() => {
    if (!commandExists.sync('wget')) {
        console.error('wget not found');
        return;
    }
    if (!fileId || !fileName) {
        console.error('Command syntax: node gdrive-download.js FILE_ID OUTPUT_FILE_NAME');
        return;
    }
    console.log(`Downloading ${fileId}, saving to ${fileName}`);
    try {
        execSync(`${command} --no-check-certificate 'https://docs.google.com/uc?export=download&id=${fileId}' -O ${fileName}`, {
            stdio: 'inherit'
        });
    } catch(_) {
        
    }
})();