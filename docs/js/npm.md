### 查看需要更新的组件库

cd到package.json目录中，执行`npm outdated`

```shell
$ npm outdated
Package         Current         Wanted  Latest  Location               Depended by
vuepress  2.0.0-beta.27  2.0.0-beta.39   1.9.7  node_modules/vuepress  shoucy.github.io
```

| Package | Current  | Wanted                                                      | Latest         | Location |
| ------- | -------- | ----------------------------------------------------------- | -------------- | -------- |
| 包名    | 当前版本 | 满足semer版本的最高版本（及在兼容的前提下能更新的最高版本） | 当前最高的版本 |          |

红色：可以立即更新
黄色：需要进行兼容，慎重更新

#### 更新

```shell
$ npm update
```

