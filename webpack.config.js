module.exports = {

    entry: './src/app.jsx',

    output: {

        filename: './test/index.js'
    },

    module: {
        
        rules: [ {

            test: /\.js[x]{0,1}$/,

            exclude: /(node_modules|bower_components)/,

            use: {

                loader: 'babel-loader',

                options: {

                    presets: [ 'react' ]
                }
            }

        } ]
    }
};