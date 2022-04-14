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
    if (index >= this.length) {
      return this.append(newNode);
    }
    let currentNode = this.head;
    let count = 0;

    while (count !== index - 1) {
      console.log('WHILE', count, index);

      currentNode = currentNode.next;
      count++;
    }
    const afterPointer = currentNode.next;

    currentNode.next = newNode;
    newNode.next = afterPointer;
    this.length++;

    return this.printList();
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {}
  }
}

const node = new Node(10);

const myLinkedList = new LinkedList(node);

myLinkedList.append(101);
myLinkedList.append(15);
myLinkedList.append(120);
myLinkedList.insert(2, 'Insert');
// myLinkedList.prepend(1);

myLinkedList.printList();

console.log(myLinkedList);
