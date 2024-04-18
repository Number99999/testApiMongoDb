import { _decorator, Button, Component, EditBox, Label, Node } from 'cc';
import { Xml } from './scipts/xml';
const { ccclass, property } = _decorator;

@ccclass('test')
export class test extends Component {
    @property(Label)
    lblNotic: Label;
    @property(EditBox)
    editUsername: EditBox;
    @property(EditBox)
    editPassword: EditBox;

    start() {
        globalThis.t = this;
    }

    login() {
        const username = this.editUsername.string;
        const password = this.editPassword.string;
        if (username && password) {
            // this.node.getChildByName("btnLogin").getComponent(Button).interactable = false;
            Xml.instance.xmlPost(`http://localhost:8080/users/login?username=${this.editUsername.string}&&password=${this.editPassword.string}`, this.callbackLogin.bind(this))
        }
    }

    createAccount() {
        const username = this.editUsername.string;
        const password = this.editPassword.string;
        if (username && password) {
            // this.node.getChildByName("btnSignup").getComponent(Button).interactable = false;
            Xml.instance.xmlPost(`http://localhost:8080/users/create?username=${this.editUsername.string}&&password=${this.editPassword.string}`, this.callbackCreateAccount.bind(this))
        }
    }

    callbackCreateAccount(cmd, status) {
        // this.node.getChildByName("btnSignup").getComponent(Button).interactable = true;
        this.lblNotic.string = "create account " + cmd;
        this.editPassword.string = "";
        this.editUsername.string = "";
    }

    callbackLogin(cmd, status) {
        // this.node.getChildByName("btnLogin").getComponent(Button).interactable = true;
        if (cmd && cmd != "err") this.lblNotic.string = cmd;
        else this.lblNotic.string = "login fail";
        this.editPassword.string = "";
        this.editUsername.string = "";
    }

    update(deltaTime: number) {

    }
}


