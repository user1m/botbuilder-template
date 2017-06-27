module.exports = {
    target: "node",
    entry: "./release/server.js",
    output: {
        path: __dirname + "/release/",
        filename: "bundle.js",
        library: '',
        libraryTarget: 'commonjs-module'
    },
    node: {
        __dirname: false,
        __filename: false
    }
};