System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Xml, _crd;

  _export("Xml", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "57e85JdlO5ET4AToGCNE7uV", "xml", undefined);

      _export("Xml", Xml = class Xml {
        static get instance() {
          if (!this._instance) this._instance = new Xml();
          return this._instance;
        }

        xmlGet(url, callback) {
          if (callback === void 0) {
            callback = null;
          }

          try {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url);

            xhr.onreadystatechange = () => {
              if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                callback(xhr.responseText);
              }
            };

            xhr.send();
          } catch (error) {
            console.error("HTTP request GET error: " + error.message);
          }
        }

      });

      Xml._instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4f505fe07739cb7afaa139670190b0fb9ee27f80.js.map