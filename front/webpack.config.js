

let path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const publicUrl = '';
// Get environment variables to inject into our app.
//const env = getClientEnvironment(publicUrl);
const env = { PUBLIC_URL: publicUrl, NODE_ENV: 'development'}


module.exports = {
    entry: "./src/index.js", // входная точка - исходный файл
    output:{
        path: path.join(__dirname, '/dist'),     // путь к каталогу выходных файлов - папка public
        filename: "index_bundle.js",       // название создаваемого файла
        publicPath: ''
    },
    module:{
        strictExportPresence: true,
        rules:[{
            test: /\.js$/, // определяем тип файлов
            exclude: /node_modules/,  // исключаем из обработки папку node_modules
            loader: "babel-loader",   // определяем загрузчик
            options:{
                presets:["@babel/preset-env", "@babel/preset-react"] // используемые плагины
            }
            // use: {
            //     loader: "babel-loader"
            // },
        },
            // {
            //     test: /\.(png|jpg|gif|svg)$/,
            //     use: [
            //         // 'cache-loader',
            //         {
            //             loader: 'file-loader?name=./image/[hash].[ext]'
            //         },
            //
            //     ]
            // },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        }),
        //new HotModuleReplacementPlugin(),

    ],
    devServer: {
        port: 8080
    },
    resolve: {
        modules: ['node_modules', paths.appNodeModules].concat(
            // It is guaranteed to exist because we tweak it in `env.js`
            process.env.NODE_PATH.split(path.delimiter).filter(Boolean)
        ),
        extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx'],
    }
}
