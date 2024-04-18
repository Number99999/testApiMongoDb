import { _decorator, Component, Node } from 'cc';
import { Xml } from './scipts/xml';
const { ccclass, property } = _decorator;

@ccclass('test')
export class test extends Component {
    start() {
        globalThis.t = this;
    }

    testGet() {
        Xml.instance.xmlGet("http://localhost:8080/", this.callback.bind(this))
    }

    testPost() {
        Xml.instance.xmlPost("http://localhost:8080/login?username=duong&&password=sieucapdeptrai", this.callback.bind(this))
    }

    callback(cmd, status) {
        console.log("callback", cmd, status);
    }

    update(deltaTime: number) {

    }
}


