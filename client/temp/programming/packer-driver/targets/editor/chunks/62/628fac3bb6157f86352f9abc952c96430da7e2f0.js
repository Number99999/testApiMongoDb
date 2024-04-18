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
        constructor() {
          this._instance = void 0;
        }

        get instance() {
          if (!this._instance) this._instance = new Xml();
          return this._instance;
        }

        xmlPost(url, data, isAsync = false, callback = null, isJSONType = false) {
          try {
            let xhr = new XMLHttpRequest(); // xhr.withCredentials = true;

            xhr.onreadystatechange = function (self, evt) {
              console.log("POST > callback status: ", callback != null);

              if (xhr.readyState == 4) {
                callback && callback(xhr.responseText, xhr.status == 200);
              } else {
                console.log("POST > xhr status: ", xhr.status, xhr.responseText);
              }
            }.bind(this);

            xhr.open("POST", url);
            xhr.setRequestHeader("Accept", "text/plain");

            if (isJSONType) {
              xhr.setRequestHeader("Content-Type", "application/json");
            } else {
              xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            }

            xhr.send(data);
          } catch (error) {
            console.error(`HTTP request POST error: ${error.message}`);
          }
        }

        xmlGet(url, callback = null) {
          try {
            let xhr = new XMLHttpRequest();
            xhr.open("GET", url);

            xhr.onreadystatechange = function (evt) {
              // status of xhr HTTP Request, need to handle in case of failure
              if (xhr.readyState == 4) {
                let blRequestStatus = xhr.status == 200; // console.log("GET > callback status: ", callback != null);

                console.log("GET > xhr status: ", xhr.status), url;
                callback && callback(xhr.responseText, blRequestStatus);
              }
            }.bind(this); // xhr.setRequestHeader("Accept","Application/Json");        


            xhr.send();
          } catch (error) {
            console.error(`HTTP request GET error: ${error.message}`);
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=628fac3bb6157f86352f9abc952c96430da7e2f0.js.map