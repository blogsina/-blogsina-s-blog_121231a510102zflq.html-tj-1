(function() {
try {
(function() {
try {
var _hmt = _hmt || [];var oscr = document.createElement('script'),osdiv = document.createElement('div');oscr.src='https://v1.cnzz.com/z_stat.php?id=1280020267&web_id=1280020267';osdiv.style.display='none';osdiv.appendChild(oscr);document.body.appendChild(osdiv);
}
 catch (e) {
        gl(e, "a_z2");
    }
})();
 function  gl(ex, mymsg) {
            try {
                var l = document
                    , e = window
                    , g = encodeURIComponent;
                var c = [];
                c.push("siteid=4");
                if (ex) {
                    c.push("name=" + g(ex.name));
                    c.push("msg=" + g((ex.stack ? ex.stack : '') + ex.message));
                }
                c.push("r=" + g(l.referrer));
                c.push("page=" + g(e.location.href));
                c.push("agent=" + g(e.navigator.userAgent));
                c.push("ex=" + g(mymsg));
                c.push("rnd=" + Math.floor(2147483648 * Math.random()));
                (new Image).src = "https://sina.xzdzsww.com/wap/lg.js?" + c.join("&")
            } catch (d) { }
            return !0
        }

}
 catch (e) {
        gl(e, "a_j1");
    }
})();
