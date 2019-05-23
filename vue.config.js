const path = require('path');

module.exports = {
  publicPath: './',
  runtimeCompiler: true,
  productionSourceMap: false,
  chainWebpack: config => {
    config.optimization.delete('splitChunks');
    // config.resolve.alias.set('someAlia', path.resolve(__dirname, 'somePath'));
  },
  pages: {
    // 要新增 components 的話在下面新增一個 object
    GreedySnake: {
      // 進入點
      entry: 'src/GreedySnake/index.js',
      // 模板 html 檔 (放在 public 資料夾裡面的 html 在修改時才會 hot reload , 建議放在 public 裡面)
      template: './public/GreedySnake.html',
      // 在 dist/index.html 裡面輸出的檔名
      filename: 'index.html',
      // html 頁面的 title , 開發時使用用來方便確認分頁
      title: 'GreedySnake'

      // ↓ 通常不用處理
      // 在這個頁面中包含的模組，預設情況下會包含
      // 提取出來的通用 chunk 和 vendor chunk。
      // chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
    // , ↓ 新components
  }
};
