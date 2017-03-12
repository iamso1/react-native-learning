#Day 1 learning navigator

switch to day1 branch

```
git checkout day1
```

##Note

1. 跳轉頁面除了pop跟push外, 還有其他方法可使用, 可參考
getCurrentRoutes() - 获取当前栈里的路由，也就是push进来，没有pop掉的那些。

jumpBack() - 跳回之前的路由，当然前提是保留现在的，还可以再跳回来，会给你保留原样。

jumpForward() - 上一个方法不是调到之前的路由了么，用这个跳回来就好了。

jumpTo(route) - 跳转到已有的场景并且不卸载。

push(route) - 跳转到新的场景，并且将场景入栈，你可以稍后跳转过去

pop() - 跳转回去并且卸载掉当前场景

replace(route) - 用一个新的路由替换掉当前场景

replaceAtIndex(route, index) - 替换掉指定序列的路由场景

replacePrevious(route) - 替换掉之前的场景

resetTo(route) - 跳转到新的场景，并且重置整个路由栈

immediatelyResetRouteStack(routeStack) - 用新的路由数组来重置路由栈

popToRoute(route) - pop到路由指定的场景，在整个路由栈中，处于指定场景之后的场景将会被卸载。

popToTop() - pop到栈中的第一个场景，卸载掉所有的其他场景。


2. 要跳到指定頁面, 可以使用 getCurrentRoutes() 先取得目前route清單, 接著再使用
jumpTo 或是 popToRoute 跳到自己想要的scense (依是否要unmount決定要用哪個方法)

3. 跳回首頁 可以用popToTop

##Referances
1. 目前看過寫得最詳細的 https://sharefunyeh.gitbooks.io/webdev/content/articles/learn-react-native.html

    - react-native组件生命周期在navigator上的表现
    - react-native组件生命周期在navigator上的表现续
    - 浅析react-native的Navigator组件01之最简实例
    - 浅析react-native的Navigator组件02之数据传送
    - 浅析react-native的Navigator组件03之动画切换

2. 這篇是中文我覺得也蠻詳細的 https://dotblogs.com.tw/explooosion/2016/09/21/163816

3. 很棒的影片教學 http://v.youku.com/v_show/id_XMjQzNjM2NzgwOA==.html?spm=a2hzp.8244740.0.0&from=y1.7-1.2
   看完可學會:

    - react-native-icon
    - flex-box

