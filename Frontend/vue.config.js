module.exports = {
  pages: {
    'index': {
      entry: './src/pages/Home/main.js',
      template: 'public/index.html',
      title: 'Home',
      chunks: [ 'chunk-vendors', 'chunk-common', 'index' ]
    },
    'login': {
      entry: './src/pages/Login/main.js',
      template: 'public/index.html',
      title: 'Login',
      chunks: [ 'chunk-vendors', 'chunk-common', 'login' ]
    },
    'register': {
      entry: './src/pages/Register/main.js',
      template: 'public/index.html',
      title: 'Register',
      chunks: [ 'chunk-vendors', 'chunk-common', 'register' ]
    },
    'search': {
      entry: './src/pages/Search/main.js',
      template: 'public/index.html',
      title: 'Register',
      chunks: [ 'chunk-vendors', 'chunk-common', 'search' ]
    },
    'articleEditor': {
      entry: './src/pages/ArticleEditor/main.js',
      template: 'public/index.html',
      title: "Edition d'article",
      chunks: [ 'chunk-vendors', 'chunk-common', 'articleEditor' ]
    }
  }
}