import './styles.css';
import printMe from './print.js';
printMe();
console.log('hello');
//Knight object 
class Node {
    constructor(data = null) {
        this.data = data;
        this.parent = null;
        this.one = null;
        this.two = null;
        this.three = null;
        this.four = null;
        this.five = null;
        this.six = null;
        this.seven = null;
        this.eight = null;
    }

}
//Convert knight to tree object and initialize other possible moves as knight objects
class Tree {
    constructor(root = null) {
        this.root = root;
        this.one = new Node([root.data[0]+1, root.data[1]+2]);
        this.two = new Node([root.data[0]+1, root.data[1]-2]);
        this.three = new Node([root.data[0]+2, root.data[1]+1]);
        this.four =  new Node([root.data[0]+2, root.data[1]-1]);
        this.five = new Node([root.data[0]-1, root.data[1]+2]);
        this.six = new Node([root.data[0]-1, root.data[1]-2]);
        this.seven = new Node([root.data[0]-2, root.data[1]+1]);
        this.eight = new Node([root.data[0]-2, root.data[1]-1]);

    }
    //checks if the position exists in the 8 x 8 board
    check() {
        let ele1 = this.root.data[0];
        let ele2 = this.root.data[1]
        if(ele1 <= 7 && ele1 >= 0  && ele2 <= 7 && ele2 >= 0 ){
            return true;
        } else return false;
    }
}
//check knight position array equality with target position array
function arraysEqual (arr1,arr2) {
    const json1 = JSON.stringify(arr1);
    const json2 = JSON.stringify(arr2);
    return json1 ==json2;
}
//main logic funtion
function knightMoves(origin, target) {
    //initialize the origin as a knight node, use it as a tree root if it exists and push to queue
    //returns the target node with its last parent as the origin
    let knight = new Node(origin);
    let moveTree = new Tree(knight);
    console.log(moveTree);
    let queue = [moveTree];
    var cont = true;
    let count = 0
    if(arraysEqual(origin, target))
    return 'You are already there!';
    while(queue.length !== 0 && cont == true) {
        count+=1;
        console.log(count);
        if(count>1000) break;
        console.log('entered loop')
        console.log(queue[0]);
        console.log(queue[0].check());
        //check if tree root data exists on board then set as parent to children
        //if not, remove from queue immediately
        if(queue[0].check(queue[0].root)) {
            console.log('start of loop');
            queue[0].one.parent = queue[0];
            queue[0].two.parent = queue[0];
            queue[0].three.parent = queue[0];
            queue[0].four.parent = queue[0];
            queue[0].five.parent = queue[0];
            queue[0].six.parent = queue[0];
            queue[0].seven.parent = queue[0];
            queue[0].eight.parent = queue[0];
            console.log(queue[0])
        //check each children's data for match
            if(arraysEqual(queue[0].one.data, target)) {
                cont = false;
                console.log(cont);
                const newTree = new Tree (queue[0].one);
                return newTree;
             } else {
                const newTree = new Tree (queue[0].one);
                queue.push(newTree);
            }
            if(arraysEqual(queue[0].two.data, target)) {
                cont = false;
                console.log(cont);
                const newTree = new Tree (queue[0].two);
                return newTree;
             } else {
                const newTree = new Tree (queue[0].two);
                queue.push(newTree);
            }
            if(arraysEqual(queue[0].three.data, target)) {
                cont = false;
                console.log(cont);
                const newTree = new Tree (queue[0].three);
                return newTree;
             } else {
                const newTree = new Tree (queue[0].three);
                queue.push(newTree);
            }
            if(arraysEqual(queue[0].four.data, target)) {
                cont = false;
                console.log(cont);
                const newTree = new Tree (queue[0].four);
                return newTree;
             } else {
                const newTree = new Tree (queue[0].four);
                queue.push(newTree);
            }
            if(arraysEqual(queue[0].five.data, target)) {
                cont = false;
                console.log(cont);
                const newTree = new Tree (queue[0].five);
                return newTree;
             } else {
                const newTree = new Tree (queue[0].five);
                queue.push(newTree);
            }
            if(arraysEqual(queue[0].six.data, target)) {
                cont = false;
                console.log(cont);
                const newTree = new Tree (queue[0].six);
                return newTree;
             } else {
                const newTree = new Tree (queue[0].six);
                queue.push(newTree);
            }
            if(arraysEqual(queue[0].seven.data, target)) {
                cont = false;
                console.log(cont);
                const newTree = new Tree (queue[0].seven);
                return newTree;
             } else {
                const newTree = new Tree (queue[0].seven);
                queue.push(newTree);
            }
            if(arraysEqual(queue[0].eight.data, target)) {
                cont = false;
                console.log(cont);
                const newTree = new Tree (queue[0].eight);
                return newTree;
             } else {
                const newTree = new Tree (queue[0].eight);
                queue.push(newTree);
            }
      
    }
    queue.shift();
}
}
let answer = knightMoves([0,0],[7,7]);
var path = [];
function getPath(tree){
    path = [];
    printMoves(tree);
}
function printMoves(tree){
    if(tree.root.data !== null) {
       path.unshift(tree.root.data);
        if(tree.root.parent !== null)
        printMoves(tree.root.parent);
    }
}
getPath(answer);
console.log(path);
console.log('hello there ulet!');
