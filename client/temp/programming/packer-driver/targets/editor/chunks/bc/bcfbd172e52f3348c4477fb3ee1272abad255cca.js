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

        xmlGet(url, callback = null) {
          try {
            let xhr = new XMLHttpRequest();
            xhr.open("GET", url);

            xhr.onreadystatechange = () => {
              if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                callback(xhr.responseText, xhr.status);
              }
            };

            xhr.send();
          } catch (error) {
            console.error(`HTTP request GET error: ${error.message}`);
          }
        }

        xmlPost(url, callback = null) {
          try {
            let xhr = new XMLHttpRequest();
            xhr.open("POST", url);

            xhr.onreadystatechange = () => {
              if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                callback(xhr.responseText, xhr.status);
              }
            };

            xhr.send();
          } catch (error) {
            console.log(error);
          }
        }

      });

      Xml._instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bcfbd172e52f3348c4477fb3ee1272abad255cca.js.map