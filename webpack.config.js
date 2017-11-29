module.exports = {

    entry: './src/app.js',

    output: {

        filename: './test/bundle.js'
    },

    module: {
        
        rules: [ {

            test: /\.js$/,

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