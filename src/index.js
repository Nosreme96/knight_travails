import './styles.css';
import printMe from './print.js';
printMe();
console.log('hello');
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
    check() {
        let ele1 = this.root.data[0];
        let ele2 = this.root.data[1]
        if(ele1 <= 7 && ele1 >= 0  && ele2 <= 7 && ele2 >= 0 ){
            return true;
        } else return false;
    }
}
function arraysEqual (arr1,arr2) {
    const json1 = JSON.stringify(arr1);
    const json2 = JSON.stringify(arr2);
    return json1 ==json2;
}
function knightMoves(origin, target) {
    let knight = new Node(origin);
    let moveTree = new Tree(knight);
    console.log(moveTree);
    let queue = [moveTree];
    var cont = true;
    let count = 0
    while(queue.length !== 0 && cont == true) {
        count+=1;
        console.log(count);
        if(count>1000) break;
        console.log('entered loop')
        console.log(queue[0]);
        console.log(queue[0].check());
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
            if(arraysEqual(queue[0].one.data, target)) {
                alert(queue[0].one.data);
                cont = false;
                console.log(cont);
                const newTree = new Tree (queue[0].one);
                return newTree;
             } else {
                const newTree = new Tree (queue[0].one);
                queue.push(newTree);
            }
            if(arraysEqual(queue[0].two.data, target)) {
                alert(queue[0].two.data);
                cont = false;
                console.log(cont);
                const newTree = new Tree (queue[0].two);
                return newTree;
             } else {
                const newTree = new Tree (queue[0].two);
                queue.push(newTree);
            }
            if(arraysEqual(queue[0].three.data, target)) {
                alert(queue[0].three.data);

                cont = false;
                console.log(cont);
                const newTree = new Tree (queue[0].three);
                return newTree;
             } else {
                const newTree = new Tree (queue[0].three);
                queue.push(newTree);
            }
            if(arraysEqual(queue[0].four.data, target)) {
                alert(queue[0].four.data);

                cont = false;
                console.log(cont);
                const newTree = new Tree (queue[0].four);
                return newTree;
             } else {
                const newTree = new Tree (queue[0].four);
                queue.push(newTree);
            }
            if(arraysEqual(queue[0].five.data, target)) {
                alert(queue[0].five.data);

                cont = false;
                console.log(cont);
                const newTree = new Tree (queue[0].five);
                return newTree;
             } else {
                const newTree = new Tree (queue[0].five);
                queue.push(newTree);
            }
            if(arraysEqual(queue[0].six.data, target)) {
                alert(queue[0].six.data);

                cont = false;
                console.log(cont);
                const newTree = new Tree (queue[0].six);
                return newTree;
             } else {
                const newTree = new Tree (queue[0].six);
                queue.push(newTree);
            }
            if(arraysEqual(queue[0].seven.data, target)) {
                alert(queue[0].seven.data);

                cont = false;
                console.log(cont);
                const newTree = new Tree (queue[0].seven);
                return newTree;
             } else {
                const newTree = new Tree (queue[0].seven);
                queue.push(newTree);
            }
            if(arraysEqual(queue[0].eight.data, target)) {
                alert(queue[0].eight.data);

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
let answer = knightMoves([3,3], [4,3]);
printMoves(answer);
function printMoves(tree){
    if(tree.root.parent != null) {
        console.log(tree.root.data);
        printMoves(tree.root.parent);
    }
}
console.log('hello there ulet!');
