System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Xml, _dec, _class, _crd, ccclass, property, test;

  function _reportPossibleCrUseOfXml(extras) {
    _reporterNs.report("Xml", "./scipts/xml", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      Xml = _unresolved_2.Xml;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8c2bey1xnhAT6uSLF7qZtQI", "test", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("test", test = (_dec = ccclass('test'), _dec(_class = class test extends Component {
        start() {
          globalThis.t = this;
        }

        test() {
          (_crd && Xml === void 0 ? (_reportPossibleCrUseOfXml({
            error: Error()
          }), Xml) : Xml).instance.xmlGet("localhost:8080", this.callback.bind(this));
        }

        callback(cmd) {
          console.log("callback", cmd);
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d1791e841d16ff4d526a3362f6fe75af933c15b8.js.map