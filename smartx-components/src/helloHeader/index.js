class HelloHeader extends HTMLElement {
    constructor() {
        super();
        // var shadow = this.attachShadow({ mode: 'closed' });
        // var container = document.createElement('div');
        // container.classList.add('container');
        // // var templateElem = document.getElementById('userCardTemplate');
        // // var content = templateElem.content.cloneNode(true);
        // console.log(this.getAttribute('title'))
        // container.innerText = this.getAttribute('title') || "测试";
        // shadow.appendChild(container);
    }

    connectedCallback() {
        // var shadow = this.attachShadow({ mode: 'closed' });
        var container = document.createElement('div');
        container.classList.add('container');
        // var templateElem = document.getElementById('userCardTemplate');
        // var content = templateElem.content.cloneNode(true);
        container.innerText = this.getAttribute('title') || "测试";
        this.appendChild(container);
    }
}
window.customElements.define('hello-header', HelloHeader); 