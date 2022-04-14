// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {}
//   }
// };

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(node) {
    this.head = node;
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log('List:', array);
    return array;
  }

  insert(index, value) {
    const newNode = new Node(value);

    while (this.length != index) {}
    this.length++;

    return this;
  }
}

const node = new Node(10);

const myLinkedList = new LinkedList(node);
myLinkedList.append(101);
myLinkedList.append(15);
myLinkedList.append(120);
myLinkedList.prepend(1);

myLinkedList.printList();

console.log(myLinkedList);
