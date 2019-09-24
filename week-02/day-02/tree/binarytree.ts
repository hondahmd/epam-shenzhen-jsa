'use strict'

import TreeNode from './treenode';

class BinaryTree {
    private nodes: TreeNode[];

    constructor() {
        this.nodes = [];
    }

    setNodesNumber(number: number) {
        for (let i = 0; i < number; i++) {
            this.nodes.push(new TreeNode(i.toString()));
        }
    }

    createTree() {
        let nodesNumber = this.nodes.length;
        for (let i = 0; i < nodesNumber / 2 + 1; i++) {
            this.nodes[i].setLeftChild(this.nodes[i * 2 + 1]);
            this.nodes[i].setRightChild(this.nodes[i * 2 + 2]);
        }
        let lastParent = nodesNumber / 2 - 1;
        this.nodes[lastParent].setLeftChild(this.nodes[lastParent * 2 + 1]);
        if (nodesNumber % 2 === 1) {
            this.nodes[lastParent].setRightChild(this.nodes[lastParent * 2 + 2]);
        }
    }
}
