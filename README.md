# ohxyz-ui
A set of Web UI components built in React

### Controls list

- Insert Text ( input[type="text"] and textarea )
- Insert Date ( input[type="text"] and input[type="number"] )
- Insert Number ( input[type="number"] )

- Options CheckboxList
- Options RadioList

- Others ( Dropdown, DropdownList, SubmitButton )

### Dependencies of a basic setup of React Environment

```
"devDependencies": {
    "babel-core": "^6.26.0",
    "babel-loader": "^7.1.2",
    "babel-preset-env": "^1.6.1",
    "babel-preset-react": "^6.24.1",
    "react": "^16.2.0",
    "react-dom": "^16.2.0",
    "webpack": "^3.8.1"
}
```
### Content of `webpack.config.js`

```
module.exports = {

    entry: './src/app.jsx',
    output: {
        filename: './test/bundle.js'
    },
    module: {
        rules: [ {
            test: /\.js[x]{0,1}$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [ 'react', 'env' ]
                }
            }
        } ]
    }
};
```