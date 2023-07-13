const csv = require('csv-parser');
const fs = require('fs');

const filePath = 'src/files/config.csv';

const readConfig = () => {
    return new Promise((resolve, reject) => {
        const data = [];
        if (fs.existsSync(filePath)) {
            fs.createReadStream(filePath)
                .pipe(csv())
                .on('data', (row) => {
                    data.push(row);
                })
                .on('end', () => {
                    resolve(data);
                })
                .on('error', (error) => {
                    reject(error);
                });
        } else {
            reject(new Error(`El archivo ${filePath} no existe`));
        }
    });
}

module.exports = {
    readConfig
};

