module.exports = {

    entry: './src/green-lpg-form.jsx',

    output: {

        filename: './test/green.js'
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