import { execSync } from 'child_process';
const command = 'wget';
const fileId = process.argv[3];
const fileName = process.argv[4];
(() => {
    try {
        execSync(`${command}`, {stdio: 'ignore'});
    } catch (err) {
        console.error('wget not found');
        return;
    }
    if (!fileId || !fileName) {
        console.error('Command syntax: node gdrive-download.js FILE_ID OUTPUT_FILE_NAME');
        return;
    }
    execSync(`${command} --no-check-certificate 'https://docs.google.com/uc?export=download&id=${fileId}' -O ${fileName}`, {
        stdio: 'inherit'
    });
})();