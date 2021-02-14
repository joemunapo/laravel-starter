const mix = require('laravel-mix');



mix.js('resources/js/app.js', 'public/js')
    .webpackConfig({
        module: {
            rules: [{
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/
            }]
        },
        resolve: {
            extensions: ["*", ".js", ".jsx", ".vue", ".ts", ".tsx"]
        }
    })
    .options({
        processCssUrls: false,
        postCss: [ require("tailwindcss") ],
    })
    .sass('resources/sass/app.scss', 'public/css')
    .version();

// .postCss('resources/css/app.css', 'public/css', [
//     //
// ]);
