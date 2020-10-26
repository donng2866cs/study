## 结论
`useCallback`和`useMemo`都可以缓存函数的引用或值，但是更细的使用角度来说，`useCallback`缓存函数的引用，`useMemo`缓存计算数据的值。

### useCallback
`useCallback` 会缓存传入的函数 <Br>

```javascript
function updateCallback(callback, deps) {
  const hook = updateWorkInProgressHook();
  const nextDeps = deps === undefined ? null : deps;
  const prevState = hook.memoizedState;
  if (prevState !== null) {
    if (nextDeps !== null) {
      const prevDeps = prevState[1];
      if (areHookInputsEqual(nextDeps, prevDeps)) {
        return prevState[0];
      }
    }
  }
  hook.memoizedState = [callback, nextDeps];
  return callback;
}
```
看代码就知道吧原本的函数直接缓存

### useMemo
```javascript
function updateMemo(nextCreate, deps) {
  const hook = updateWorkInProgressHook();
  const nextDeps = deps === undefined ? null : deps;
  const prevState = hook.memoizedState;
  if (prevState !== null) {
    if (nextDeps !== null) {
      const prevDeps = prevState[1];
      if (areHookInputsEqual(nextDeps, prevDeps)) {
        return prevState[0];
      }
    }
  }
  const nextValue = nextCreate();
  hook.memoizedState = [nextValue, nextDeps];
  return nextValue;
}
```
因为这里会先执行 `nextCreate`， 然后每次返回的是执行后的结果， 所以如果对计算比较密集的，这里就不会每次都去重复执行，相当于有了一层缓存
的作用
