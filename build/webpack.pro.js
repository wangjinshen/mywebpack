var path = require('path')

module.exports={
    output: {
        path: path.resolve(process.cwd(), 'dist'),
        filename: '[name].js'
    }

}