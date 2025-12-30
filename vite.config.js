// vite.config.js
const path = require('path')

module.exports = {
  root: path.resolve(__dirname, 'src'),  // 將 src 設為專案根目錄
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap')  // 別名 '~bootstrap' 指向 Bootstrap 套件
    }
  },
  server: { hot: true }  // 啟用熱重載
}
