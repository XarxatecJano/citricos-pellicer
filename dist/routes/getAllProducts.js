"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getAllProducts(request, response) {
    const users = [{ name: "John", age: 30 }, { name: "Peter", age: 40 }];
    response.statusCode = 200;
    response.send({ users });
}
exports.default = getAllProducts;
