const handler = {
    get: function(targetObject) {
        if (targetObject['nextId'] === undefined) {
            targetObject['nextId'] = 1;
        } else {
            return ++targetObject['nextId'];
        }
        return 1;
    }
}
const target = {a:1};

const proxyObj = new Proxy(target, handler);
console.log(proxyObj.nextId);
console.log(proxyObj.nextId);
console.log(proxyObj.nextId);
