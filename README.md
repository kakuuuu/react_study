>初学React, 练手的网易云音乐项目

### 一、简介

#### 技术栈

1. React
2. React-Router
3. Redux
4. Ant Design
5. 网易云音乐接口服务[https://github.com/Binaryify/NeteaseCloudMusicApi](https://github.com/Binaryify/NeteaseCloudMusicApi)

### 二、 项目结构

``` 
src:.
│  index.js
│  
├─action
│      actions.js
│      handleMusicList.js
│      
├─assest
│  └─fonts
│          iconfont.css
│          iconfont.eot
│          iconfont.js
│          iconfont.svg
│          iconfont.ttf
│          iconfont.woff
│          
├─components
│      Home.js
│      HotList.js
│      Playlist.js
│      Recommend.js
│      Search.js
│      Song.js
│      
├─css
│      globle.scss
│      hotlist.scss
│      playlist.scss
│      recommend.scss
│      search.scss
│      song.scss
│      
├─reducers
│      rootreducer.js
│      
└─store
        store.js
        
```

### 三、目前进度

* [x] 推荐页
* [x] 榜单页
* [x] 搜索页
* [x] 音乐播放-歌词
* [x] 音乐播放-进度
* [x] 歌单页
* [x] 歌曲播放列表

###  四、项目预览

#### Github:[https://github.com/kakuuuu/react_study](https://github.com/kakuuuu/react_study)

![image.png](https://upload-images.jianshu.io/upload_images/6888366-61daedbf019a5e49.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![image.png](https://upload-images.jianshu.io/upload_images/6888366-fb42c8f450fa5127.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![image.png](https://upload-images.jianshu.io/upload_images/6888366-e9db6c29018e0256.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![image.png](https://upload-images.jianshu.io/upload_images/6888366-17ecbfd6f5f500bc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![image.png](https://upload-images.jianshu.io/upload_images/6888366-6e44d832cf2ca336.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start` 

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `npm test` 

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build` 

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject` 

**Note: this is a one-way operation. Once you `eject` , you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject` . The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

#### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

#### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

#### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

#### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

#### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
