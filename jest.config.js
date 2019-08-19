module.exports = {
    verbose: true,
    setupFiles: ['./testing/setupTests.js'],
    snapshotSerializers: ['jest-glamor-react'],
    moduleFileExtensions: ['', 'js', 'jsx'],
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
        '<rootDir>/assetsTransformer.js',
    },
};