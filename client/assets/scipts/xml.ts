export class Xml {
    private static _instance: Xml;
    public static get instance() {
        if (!this._instance) this._instance = new Xml();
        return this._instance;
    }
    xmlGet(url: string, callback: Function = null) {
        try {
            let xhr = new XMLHttpRequest();
            xhr.open("GET", url);
            xhr.onreadystatechange = () => {
                if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                    callback(xhr.responseText, xhr.status)
                }
            }
            xhr.send();
        } catch (error) {
            console.error(`HTTP request GET error: ${error.message}`);
        }
    }
    xmlPost(url: string, callback: Function = null) {
        try {
            let xhr = new XMLHttpRequest();
            xhr.open("POST", url);
            xhr.onreadystatechange = () => {
                if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                    callback(xhr.responseText, xhr.status)
                }
            }
            xhr.send();
        } catch (error) {
            console.log(error);
        }
    }
}