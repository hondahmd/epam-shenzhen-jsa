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

    private swapNodes(first: TreeNode, second: TreeNode): void {
        let tmp = first.getValue();
        first.setValue(second.getValue());
        second.setValue(tmp);
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

    private deleteNoChildNode(deleteNode: TreeNode): void {
        if (deleteNode === this._root) {
            deleteNode = null;
            return;
        }
        if (this.checkLorR(deleteNode)) {
            deleteNode.getParent().setLeftChild(null);
            deleteNode = null;
        } else {
            deleteNode.getParent().setRightChild(null);
            deleteNode = null;
        }
    }

    private deleteOneChildNode(deleteNode: TreeNode): void {
        if (deleteNode === this._root) {
            if (deleteNode.getLeftChild() !== null) {
                this._root = deleteNode.getLeftChild();
                deleteNode.getLeftChild().setParent(null);
                deleteNode = null;
            } else {
                this._root = deleteNode.getRightChild();
                deleteNode.getRightChild().setParent(null);
                deleteNode = null;
            }
            return;
        }
        if (deleteNode.getLeftChild() !== null) {
            if (this.checkLorR(deleteNode)) {
                deleteNode.getParent().setLeftChild(deleteNode.getLeftChild());
                deleteNode.getLeftChild().setParent(deleteNode.getParent());
                deleteNode = null;
            } else {
                deleteNode.getParent().setRightChild(deleteNode.getLeftChild());
                deleteNode.getLeftChild().setParent(deleteNode.getParent());
                deleteNode = null;
            }
        } else {
            if (this.checkLorR(deleteNode)) {
                deleteNode.getParent().setLeftChild(deleteNode.getRightChild());
                deleteNode.getRightChild().setParent(deleteNode.getParent());
                deleteNode = null;
            } else {
                deleteNode.getParent().setRightChild(deleteNode.getRightChild());
                deleteNode.getRightChild().setParent(deleteNode.getParent());
                deleteNode = null;
            }
        }
    }

    private deleteTwoChildNode(deleteNode: TreeNode): void {
        let swapNode = deleteNode.getRightChild();
        while (swapNode.getLeftChild() !== null) {
            swapNode = swapNode.getLeftChild();
        }
        this.swapNodes(swapNode, deleteNode);
        if (swapNode.getLeftChild() === null && swapNode.getRightChild() === null) {
            this.deleteNoChildNode(swapNode);
        } else {
            this.deleteOneChildNode(swapNode);
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
        if (deleteNode.getLeftChild() === null && deleteNode.getRightChild() === null) {
            this.deleteNoChildNode(deleteNode);
        } else if (deleteNode.getLeftChild() !== null && deleteNode.getRightChild() !== null) {
            this.deleteTwoChildNode(deleteNode);
        } else {
            this.deleteOneChildNode(deleteNode);
        }
    }

    public search(value: string): boolean {
        return this.searchNode(value) !== null ? true : false;
    }
}

export default BinarySearchTree;
