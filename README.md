# JavaScript_skeleton [![Build Status](https://travis-ci.org/kuwalab/JavaScript_skeleton.svg?branch=master)](https://travis-ci.org/kuwalab/JavaScript_skeleton)

Grunt + Karma + mocha + chaiのスケルトンプロジェクトです。

## 実行方法

npmとbowerで必要なものをインストールしまう。

```sh
$ npm install
$ bower install
```

ビルドはdefaultタスクに設定してありますので、gruntコマンドでビルドされます。

```sh
$ grunt
```

Karmaによるテストはtestタスクで実行できます。

```sh
$ grunt karma
```

npm testでもテストできます。

```sh
$ npm test
```
