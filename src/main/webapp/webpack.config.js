config ={
    entry: './main.js',
    output: {
       path: '/Users/syaragat/C/Team8/blogrestcontroller/src/main/webapp/webapp',
       filename: 'index.js',
    },

devServer: {
    inline: true,
    port: 8090
},
module: {
    loaders: [
    {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
           presets: ['es2015', 'react']
        }
     }
  ]
}

}
module.exports = config;
