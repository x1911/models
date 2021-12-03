

onmessage = async function(e) {
    // const ll = await import('./ThreeLoad.js')
    // const lo = new ll.default()
    // await lo.start()
    // console.log('读取ll', ll, globalThis)
    
    console.log('接收到数据', e);
    var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
    console.log('Posting message back to main script');
    // postMessage(workerResult);
    const ww = THREE.Object3D()
    postMessage(ww)
  }

function run() {

    (function (i, s, o, g, r, a, m) { i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () { (i[r].q = i[r].q || []).push(arguments) }, i[r].l = 1 * new Date(); a = s.createElement(o), m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m) })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

    ga('create', 'UA-101902614-1', 'auto');
    ga('send', 'pageview');

}