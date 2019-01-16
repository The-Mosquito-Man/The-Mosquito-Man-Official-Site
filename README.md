# theMosquitoMan - WEBSITE
一個專門分享「衛教」、「環境衛生」、「打擊登革熱」資訊的網站。

## Getting Started

### Prerequistes
* [node.js](https://nodejs.org/) `< 10.0` (This project doesn't support gulp with version higher than 3.9.)
* [npm](https://www.npmjs.com/)
* [http-server](https://www.npmjs.com/package/http-server)

#### For Ubuntu Users
Ubuntu users have to install `ruby` and `ruby-compass` as well.

```sh
sudo apt install ruby-compass
```

### Install package

```bash
npm install -i
```

### How to Use
1. Build sass, js, and hbs

```bash
$ gulp
```

If your `gulp` doesn't work, try the following command.

```sh
npm install -g gulp-cli
```

2. Start local http server

```sh
http-server
```

3. Open your browser and go to http://localhost:8000


## Develop

### Add a new site
- Create a `.hbs` file in **`layout/`**

```html
<!DOCTYPE HTML>
<html lan="en">
<head>
  {{> head }}
</head>

<body style="overflow-x:hidden;">
  {{>header}}
  
  ---------------
  Write your code
  ---------------
  
  {{> footer}}
</body>
<script src="./dist/src/jquery-2.2.4.min.js"></script>
<script src="./dist/js/nav.js"></script>
</html>
```

- `.scss` or `.sass` or `.css` in **`sass/`**
  - in your .hbs file :

```html
<link href="./dist/css/filename.css">
```

- `.js` in **`js/`** 
  - in your .hbs file :

```html
<script src="./dist/js/filename.js"></script>
```

- Remember update `hbsRouter.js`

```js
{
  path: './',
  title: 'My title'
},
```

- Make command : 
```
$ gulp
```

### Structure

```
index.html : 首頁
about.html : 關於我們
context.html : 文言蚊
interact.html : 互動專區
killer.html : 降蚊十八招
knowledge.html : 聞風喪膽
qa.html : 有蚊必答
realTime.html : 即時疫情
resource.html : 資料來源
slot_machine.html : 抽獎機
hbsRouter.js : control hbs 產生的內容及位置
partial.js : control .hbs's component (詳細請看handlebar.js)
gulpfile.js : control gulp
config.rb : compass's config
| - interact/ : 互動專區裡面的html
| - | - game/Mosquito_war/ : 掌蚊宗師遊戲檔案 build
| - content/ : 文言蚊的html
| - sass/ : scss檔案（compass會自動抓取這裡面的scss檔來編譯）
| - js/ : js 檔案（未編譯前）
| - layout/ : hbs 的 template檔案（未編譯前）
| - bin/
| - | - build : canner-core 的核心
| - dist/
| - | - audio/ : some audio music
| - | - css/ : minify .css
| - | - js/ : minify .js
| - | - src/ : img, data, and some library's file
| - | - favicon/ : 網頁標籤上左上角的小小icon
| - game/ : 各遊戲檔案
| - | - Mosquito_war/ : 掌蚊宗師遊戲檔案 source 
```

## License
Copyright (c) NCKU The Mosquito Man Project. All rights reserved.

Licensed under the MIT License.
