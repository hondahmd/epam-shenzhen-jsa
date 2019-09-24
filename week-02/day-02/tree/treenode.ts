'use strict';

class TreeNode {
    private value: string;
    private lChild: TreeNode;
    private rChild: TreeNode;
    private parent: TreeNode;

    constructor(value: string) {
        this.value = value;
        this.lChild = null;
        this.rChild = null;
        this.parent = null;
    }

    public setLeftChild(lChild: TreeNode): void {
        this.lChild = lChild;
    }

    public setRightChild(rChild: TreeNode): void {
        this.rChild = rChild;
    }

    public setParent(parent: TreeNode): void {
        this.parent = parent;
    }

    public getLeftChild(): TreeNode {
        return this.lChild;
    }

    public getRightChild(): TreeNode {
        return this.rChild;
    }

    public getParent(): TreeNode {
        return this.parent;
    }

    public getValue(): string {
        return this.value;
    }
}

export default TreeNode;
