$(document).ready(function() {
    function e() {
        t = $(window).scrollTop(),
        $("main, .footer").wrapAll('<div class="bodyWrapper">')
    }
    function n() {
        $("main, .footer").unwrap(),
        $(window).scrollTop(t)
    }
    var a = $(".burger")
      , o = $(".header")
      , t = ($("body"),
    0);
    a.magnificPopup({
        closeOnContentClick: !1,
        closeBtnInside: !1,
        fixedContentPos: !0,
        modal: !0,
        mainClass: "mfp-no-margins mfp-with-zoom",
        callbacks: {
            open: function() {
                e()
            },
            close: function() {
                n()
            }
        }
    }),
    a.click(function(e) {
        o.hasClass("header--bg") ? o.removeClass("header--bg") : o.addClass("header--bg"),
        $(this).toggleClass("burger--active"),
        $(this).hasClass("burger--active") || $.magnificPopup.close()
    })
}),
$(document).ready(function() {
    function e() {
        o && ($(window).scrollTop() > 50 ? n.hasClass("header--small") || n.addClass("header--small") : n.hasClass("header--small") && n.removeClass("header--small"))
    }
    var n = $(".header")
      , a = $(".burger")
      , o = !0
      , t = $(window).width();
    $(window).resize(function(e) {
        if ($(window).width() != t) {
            t = $(window).width();
            var o = $(".navigationList-item:eq(1)").css("display");
            "none" !== o && ($.magnificPopup.close(),
            a.removeClass("burger--active"),
            n.removeClass("header--bg"))
        }
    }),
    $(window).scroll(function() {
        e()
    })
}),
$(document).ready(function() {
    var e = $(".grayscale")
      , n = function(e) {
        var n = ""
          , a = ""
          , o = ""
          , t = ""
          , s = 0;
        for (s; s < e.length; s += 4)
            n = e[s],
            a = e[s + 1],
            o = e[s + 2],
            t = .2126 * n + .7152 * a + .0722 * o,
            e[s] = t,
            e[s + 1] = t,
            e[s + 2] = t;
        return e
    }
      , a = function(e) {
        $('<canvas class="grayscale-canvas"></canvas>').appendTo(e);
        var a = $(".grayscale-item", e)
          , o = $(".grayscale-canvas", e)[0]
          , t = o.getContext("2d")
          , s = a.width();
        ch = a.height(),
        o.width = s,
        o.height = ch,
        t.drawImage(a[0], 0, 0, s, ch);
        try {
            var i = t.getImageData(0, 0, s, ch)
              , r = i.data;
            i.data = n(r),
            t.putImageData(i, 0, 0),
            e.addClass("grayscale--ready")
        } catch (d) {
            console.log("Error " + d.name + ":" + d.message + "\n" + d.stack)
        }
    };
    e && e.each(function(e, n) {
        var o = $(this);
        o.imagesLoaded(function() {
            a(o)
        })
    })
}),
$(document).ready(function() {
    !function(e, n, a) {
        function o(e, n) {
            return typeof e === n
        }
        function t() {
            var e, n, a, t, s, i, r;
            for (var l in d)
                if (d.hasOwnProperty(l)) {
                    if (e = [],
                    n = d[l],
                    n.name && (e.push(n.name.toLowerCase()),
                    n.options && n.options.aliases && n.options.aliases.length))
                        for (a = 0; a < n.options.aliases.length; a++)
                            e.push(n.options.aliases[a].toLowerCase());
                    for (t = o(n.fn, "function") ? n.fn() : n.fn,
                    s = 0; s < e.length; s++)
                        i = e[s],
                        r = i.split("."),
                        1 === r.length ? c[r[0]] = t : (!c[r[0]] || c[r[0]]instanceof Boolean || (c[r[0]] = new Boolean(c[r[0]])),
                        c[r[0]][r[1]] = t),
                        f.push((t ? "" : "no-") + r.join("-"))
                }
        }
        function s() {
            return "function" != typeof n.createElement ? n.createElement(arguments[0]) : p ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments)
        }
        function i() {
            var e = n.body;
            return e || (e = s(p ? "svg" : "body"),
            e.fake = !0),
            e
        }
        function r(e, a, o, t) {
            var r, d, l, c, f = "modernizr", u = s("div"), p = i();
            if (parseInt(o, 10))
                for (; o--; )
                    l = s("div"),
                    l.id = t ? t[o] : f + (o + 1),
                    u.appendChild(l);
            return r = s("style"),
            r.type = "text/css",
            r.id = "s" + f,
            (p.fake ? p : u).appendChild(r),
            p.appendChild(u),
            r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(n.createTextNode(e)),
            u.id = f,
            p.fake && (p.style.background = "",
            p.style.overflow = "hidden",
            c = h.style.overflow,
            h.style.overflow = "hidden",
            h.appendChild(p)),
            d = a(u, e),
            p.fake ? (p.parentNode.removeChild(p),
            h.style.overflow = c,
            h.offsetHeight) : u.parentNode.removeChild(u),
            !!d
        }
        var d = []
          , l = {
            _version: "3.3.1",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(e, n) {
                var a = this;
                setTimeout(function() {
                    n(a[e])
                }, 0)
            },
            addTest: function(e, n, a) {
                d.push({
                    name: e,
                    fn: n,
                    options: a
                })
            },
            addAsyncTest: function(e) {
                d.push({
                    name: null,
                    fn: e
                })
            }
        }
          , c = function() {};
        c.prototype = l,
        c = new c;
        var f = []
          , u = l._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
        l._prefixes = u;
        var h = n.documentElement
          , p = "svg" === h.nodeName.toLowerCase()
          , m = l.testStyles = r;
        c.addTest("touchevents", function() {
            var a;
            if ("ontouchstart"in e || e.DocumentTouch && n instanceof DocumentTouch)
                a = !0;
            else {
                var o = ["@media (", u.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
                m(o, function(e) {
                    a = 9 === e.offsetTop
                })
            }
            return a
        }),
        t(),
        delete l.addTest,
        delete l.addAsyncTest;
        for (var v = 0; v < c._q.length; v++)
            c._q[v]();
        e.Modernizr = c
    }(window, document);
    var e = $(".navigation")
      , n = $(".navigationList-item");
    n.hover(function() {
        $(this).addClass("navigationList-item--dropdown--show")
    }, function() {
        $(this).removeClass("navigationList-item--dropdown--show")
    });
    var a = $(window).width();
    Modernizr.touchevents && a <= 1300 ? e.addClass("navigation_touch") : e.addClass("navigation_normal")
}),
$(document).ready(function() {
    $(".lists--with-two-columns").each(function() {
        $("li", $(this)).matchHeight({
            byRow: !0
        })
    })
});
