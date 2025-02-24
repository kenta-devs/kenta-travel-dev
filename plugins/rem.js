// 隔离作用域，避免全局变量的污染
!(function () {
    function setHtmlFontSize() {
      var mobileWidth=768;
      var bodyWidth = document.documentElement.getBoundingClientRect().width; // 当前窗口的宽度
      bodyWidth = bodyWidth > 1440 ? 1440 : bodyWidth
      var whdef = 100 / (bodyWidth>mobileWidth?1440:375); // 表示1440的设计图,使用100PX的默认值
      var rem = bodyWidth * whdef; // 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
      document.getElementsByTagName('html')[0].style.fontSize = rem + 'px'
      document.getElementsByTagName('html')[0].className=(bodyWidth>mobileWidth?'pc':'mobile');

      //全局定义变量，表示是否是移动端
      window.isMobile = bodyWidth <= mobileWidth;
    }
    setHtmlFontSize();
    window.addEventListener("resize", function () {
      setTimeout(function () {
        setHtmlFontSize();
      }, 100)
    })
  })();
