'use strict';

import TreeNode from './treenode';
import Tree from './treeinterface';

class BinarySearchTree implements Tree {
    private _root: TreeNode;
    
    constructor() {
        this._root = null;
    }

    private searchInsertPosition(value): TreeNode {
        let iterator = this._root;
        let parent = iterator;
        while(iterator !== null) {
            parent = iterator;
            if (value > iterator.getValue()) {
                iterator = iterator.getRightChild();
            } else if (value < iterator.getValue()) {
                iterator = iterator.getLeftChild();
            } else {
                parent = null;
            }
        }
        return parent;
    }

    private searchNode(value: string) {
        let iterator = this._root;
        while(iterator !== null) {
            if (value > iterator.getValue()) {
                iterator = iterator.getRightChild();
            } else if (value < iterator.getValue()) {
                iterator = iterator.getLeftChild();
            } else {
                break;
            }
        }
        return iterator;
    }

    private searchSwapNode(node: TreeNode): TreeNode {
        let iterator = node;
        let lChild = node.getLeftChild();
        let rChild = node.getRightChild();
        if (lChild === null && rChild === null) {
            iterator = null;
        } else if (lChild !== null && rChild !== null) {
            iterator = rChild;
            while(iterator.getLeftChild() !== null) {
                iterator = iterator.getLeftChild();
            }
        } else {
            if (lChild !== null) {
                iterator = lChild;
            } else {
                iterator = rChild;
            }
        }
        return iterator;
    }

    private swapNodes(first: TreeNode, second: TreeNode): void {
        let parent = first.getParent();
        let lChild = first.getLeftChild();
        let rChild = first.getRightChild();
        first.setLeftChild(second.getLeftChild());
        first.setRightChild(second.getRightChild());
        first.setParent(second.getParent());
        second.setLeftChild(lChild);
        second.setRightChild(rChild);
        second.setParent(parent);
    }

    private checkLorR(node: TreeNode): boolean {
        let parent = node.getParent();
        if (parent.getLeftChild() !== null) {
            if (parent.getLeftChild().getValue() === node.getValue()) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    private deleteNode(deleteNode: TreeNode): void {
        if (this.checkLorR(deleteNode)) {
            deleteNode.getParent().setLeftChild(null);
            deleteNode = null;
        } else {
            deleteNode.getParent().setRightChild(null);
            deleteNode = null;
        }
    }

    public empty(): boolean {
        return this._root === null ? true : false;
    }

    public add(value: string): void {
        let newNode = new TreeNode(value);
        if (this._root === null) {
            this._root = newNode;
        } else {
            let parentNode = this.searchInsertPosition(value);
            if (parentNode !== null) {
                if (value > parentNode.getValue()) {
                    parentNode.setRightChild(newNode);
                } else {
                    parentNode.setLeftChild(newNode);
                }
                newNode.setParent(parentNode);
            } else {
                console.log("Node already exists!");
            }
        }
    }

    public remove(value: string): void {
        let deleteNode = this.searchNode(value);
        let swapNode = this.searchSwapNode(deleteNode);
        if (swapNode === null) {
            this.deleteNode(deleteNode);
        } else if (swapNode === deleteNode.getLeftChild() || swapNode === deleteNode.getRightChild()) {
            if (this.checkLorR(deleteNode)) {
                deleteNode.getParent().setLeftChild(swapNode);
            } else {
                deleteNode.getParent().setRightChild(swapNode);
            }
            deleteNode = null;
        } else {
            this.swapNodes(deleteNode, swapNode);
            swapNode = this.searchSwapNode(deleteNode);
            if (swapNode === null) {
                this.deleteNode(deleteNode);
            } else {
                this.swapNodes(deleteNode, swapNode);
                this.deleteNode(deleteNode);
            }
        }
    }

    public search(value: string): boolean {
        return this.searchNode(value) !== null ? true : false;
    }
}

export default BinarySearchTree;
