const path = require('path');

module.exports = {
    entry: {
        background: './src/js/background.js',
        options: './src/js/options.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'src/dist'),
    },
};
