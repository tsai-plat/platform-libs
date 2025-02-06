# Publish libs


## lib 发布步骤

1. build
```
$ pnpm -F common build

# OR
$ pnpm build:libs

```

2. changeset  
执行 changeset，开始交互式填写变更集，这个命令会将你的包全部列出来，然后选择你要更改发布的包

3. 执行 changeset version，修改发布包的版本
```
$ pnpm version:pkg
```