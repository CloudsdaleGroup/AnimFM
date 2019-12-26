! function() {
    var e, n, t = ".sm2-bar-ui",
        a = window.sm2BarPlayers;
    window.SM2BarPlayer;
    soundManager.setup({
        url: "../../swf/"
    }), e = {
        css: function() {
            function e(e, n) {
                return void 0 !== e.className && new RegExp("(^|\\s)" + n + "(\\s|$)").test(e.className)
            }

            function n(n, t) {
                if (!n || !t || e(n, t)) return !1;
                n.className = (n.className ? n.className + " " : "") + t
            }

            function t(n, t) {
                if (!n || !t || !e(n, t)) return !1;
                n.className = n.className.replace(new RegExp("( " + t + ")|(" + t + ")", "g"), "")
            }
            return {
                has: e,
                add: n,
                remove: t,
                swap: function(e, a, c) {
                    var o = {
                        className: e.className
                    };
                    t(o, a), n(o, c), e.className = o.className
                },
                toggle: function(a, c) {
                    var o;
                    return ((o = e(a, c)) ? t : n)(a, c), !o
                }
            }
        }(),
        dom: function() {
            function e() {
                var e, n, t;
                return 1 === arguments.length ? (e = document.documentElement, n = arguments[0]) : (e = arguments[0], n = arguments[1]), e && (t = e.querySelectorAll(n)), t
            }
            return {
                get: function() {
                    var n = e.apply(this, arguments);
                    return n && n.length && (n = n[n.length - 1]), n
                },
                getAll: e,
                getFirst: function() {
                    var n = e.apply(this, arguments);
                    return n && n.length && (n = n[0]), n
                }
            }
        }(),
        events: {
            add: function(e, t, a) {
                var c = {
                    detach: function() {
                        return n(e, t, a)
                    }
                };
                return window.addEventListener ? e.addEventListener(t, a, !1) : e.attachEvent("on" + t, a), c
            },
            preventDefault: function(e) {
                return e.preventDefault ? e.preventDefault() : (e.returnValue = !1, e.cancelBubble = !0), !1
            },
            remove: n = void 0 !== window.removeEventListener ? function(e, n, t) {
                return e.removeEventListener(n, t, !1)
            } : function(e, n, t) {
                return e.detachEvent("on" + n, t)
            }
        }
    }, soundManager.onready(function() {
        var n = {
            pageBackgroundPicker: document.getElementById("page-background"),
            playerBackgroundPicker: document.getElementById("player-background"),
            colorPicker: document.getElementById("color-field"),
            opacityPicker: document.getElementById("opacity-field"),
            sizePicker: document.getElementById("size-field"),
            colorOutput: document.getElementById("color-output"),
            backgroundValue: null,
            opacityValue: null,
            sizeValue: null
        };

        function c() {
            var e, t, a = n.backgroundValue,
                c = parseInt(n.opacityValue, 10);
            "#" !== a.charAt(0) && (a = "#" + a), colorString = 0 === c ? "transparent" : c < 100 ? "rgba(" + (e = a.substr(1), t = parseInt(e, 16), [t >> 16 & 255, t >> 8 & 255, 255 & t]).concat([c / 100]).join(", ") + ")" : n.backgroundValue, l(".sm2-main-controls, .sm2-playlist-drawer", function(e) {
                e.style.backgroundColor = colorString
            }), n.colorOutput.innerHTML = 0 === c ? "background-color: transparent;" : c < 100 ? "background-color: " + a + "; /* non-RGBA fallback */\n background-color: " + colorString + ";" : "background-color: " + colorString + ";"
        }

        function o(n, a) {
            var c = n.target || n.srcElement,
                o = document.documentElement,
                u = c.value,
                r = c.value.match(/transparent/i),
                i = c.options[c.selectedIndex].getAttribute("data-dark");
            a ? (o.style.background = u, document.body.style.color = i ? "#fff" : "#000") : (l(".sm2-inline-texture", function(e) {
                e.style.background = u
            }), document.getElementById("texture-output").innerHTML = "background: " + u + ";", l(t, r ? function(n) {
                e.css.remove(n, "textured")
            } : function(n) {
                e.css.add(n, "textured")
            }), d())
        }

        function u() {
            var e = n.opacityPicker.value;
            e !== n.sizeValue && (n.opacityValue = e, c())
        }

        function r() {
            var e = n.sizePicker.value;
            e !== n.sizeValue && (n.sizeValue = e, l(t, function(n) {
                n.style.fontSize = e + "px"
            }), document.getElementById("fontsize-output").innerHTML = e + "px;")
        }

        function l(n, a) {
            var c, o, u = e.dom.getAll(n || t);
            for (c = 0, o = u.length; c < o; c++) a(u[c])
        }

        function d() {
            var n = e.dom.getFirst(t).className;
            n = n.replace(/[ ]playing|[ ]paused|[ ]buffering/gi, ""), document.getElementById("player-code-example").innerHTML = n
        }
        n.backgroundValue = n.colorPicker.value, n.opacityValue = n.opacityPicker.value, n.sizeValue = n.sizePicker.value, e.events.add(n.colorPicker, "change", function(e) {
            var t = (e.target || e.srcElement).value;
            t && (n.backgroundValue = t), c()
        }), e.events.add(n.opacityPicker, "change", function(e) {
            var t = (e.target || e.srcElement).value;
            void 0 !== t && (n.opacityValue = t), c()
        }), e.events.add(n.sizePicker, "change", function(e) {
            var a = (e.target || e.srcElement).value;
            void 0 !== a && (n.sizeValue = a), l(t, function(e) {
                e.style.fontSize = a + "px"
            })
        }), e.events.add(n.pageBackgroundPicker, "change", function(e) {
            o(e, !0)
        }), e.events.add(n.playerBackgroundPicker, "change", function(e) {
            o(e, !1)
        }), e.events.add(n.opacityPicker, "mousedown", function(n) {
            var t, a;
            0 === n.button && (t = e.events.add(document, "mousemove", u), a = e.events.add(document, "mouseup", function(e) {
                t.detach(), a.detach()
            }))
        }), e.events.add(n.sizePicker, "mousedown", function(n) {
            var t, a;
            0 === n.button && (t = e.events.add(document, "mousemove", r), a = e.events.add(document, "mouseup", function(e) {
                t.detach(), a.detach()
            }))
        }), e.events.add(n.colorPicker, "click", function(t) {
            var a, o;
            o = e.events.add(n.colorPicker, "change", function(e) {
                a && (window.clearInterval(a), a = null), o.detach()
            }), a = window.setInterval(function() {
                var e = n.colorPicker.value;
                n.backgroundValue !== e && (n.backgroundValue = e, c())
            }, 50), moveHandler = e.events.add(document, "mousemove", r), upHandler = e.events.add(document, "mouseup", function(e) {
                moveHandler.detach(), upHandler.detach()
            })
        }), e.events.add(document.getElementById("fullwidth"), "click", function(n) {
            l(null, function(n) {
                e.css.toggle(n, "full-width"), d()
            })
        }), e.events.add(document.getElementById("textured"), "click", function(n) {
            l(null, function(n) {
                e.css.toggle(n, "textured"), d()
            })
        }), e.events.add(document.getElementById("dark"), "click", function(n) {
            l(null, function(n) {
                e.css.toggle(n, "dark-text"), d()
            })
        }), e.events.add(document.getElementById("flat"), "click", function(n) {
            l(null, function(n) {
                e.css.toggle(n, "flat"), d()
            })
        }), e.events.add(document.getElementById("playlist-open"), "click", function(e) {
            var n, t;
            for (n = 0, t = a.length; n < t; n++) a[n].actions.menu();
            d()
        })
    })
}();