# 新 Vue SFC 製作包 !!!

基於 Vue-CLI 3 修改出來的製作包

用 .vue 檔製作出能讓其他 html 檔案經由 <scrip> 和 <link> 引入使用的 js 檔元件

需要切分檔案請看 vue.config.js 裡面的註解

有任何問題或是對這個包的架構有更好的想法歡迎找 Leo (廖翊翔) 討論

2019/4/17

#### ------------------------------------------------------------------------

## 使用方法

如果沒安裝 Vue-CLI 的話,請先安裝,指令 npm install -g @vue/cli

git clone 下來這個包後,先下 npm i 指令,之後下 npm run serve ,

terminal 會顯示 dev server 網址, ctrl + 滑鼠右鍵點擊會在瀏覽器開啟,

網址加上 vue.config.js 裡面 page 的 filename (如果是 index.html 的話會直接在根目錄，所以不用加)

## 預設 Alias

```
@:/src
```

# 以下是通用指令

## 開啟 UI

```
vue ui
```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```
