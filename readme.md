# 注意

このライブラリは https://github.com/akrisrn/regalias を Node.js で書き直したものです。
上記プログラムの作者様との関係はありません。

# ライセンス

このソフトウェアは、 Apache 2.0 ライセンスで配布されている製作物が含まれています。

# インストール方法

```bash
yarn add https://github.com/482F/regalias-node
```

# 使用方法

```javascript
import regalias from 'regalias-node'

// 引数を渡さずに実行すると...
console.log(regalias()) // -> 氷の常闇
// 異名をランダムに生成します

console.log(regalias()) // -> 勝利者の帝 != 氷の常闇
console.log(regalias()) // -> 少女っぽい貴族

// 引数に名前を渡して実行すると...
console.log(regalias('@')) // -> 定めの浮浪者
// その名前に対応する異名を生成します

console.log(regalias('マニ')) // -> ナイトチャレンジ

// うみみゃぁ！
console.log(regalias('エヘカトル')) // -> 微笑の奴隷
// 名前付き異名の生成結果は常に同一です！
console.log(regalias('エヘカトル')) // -> 微笑の奴隷
```
