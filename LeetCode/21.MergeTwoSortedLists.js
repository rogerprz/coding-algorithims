/* eslint-disable no-param-reassign */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const mergeTwoLists = function (l1, l2) {
  let list = new ListNode();
  const head = list;

  while (l1 || l2) {
    if (!l1 && l2) {
      list.next = l2;
      l2 = l2.next;
    } else if (l1 && !l2) {
      list.next = l1;
      l1 = l1.next;
    } else if (l1.val < l2.val) {
      list.next = new ListNode(l1.val);
      l1 = l1.next;
    } else {
      list.next = new ListNode(l2.val);
      l2 = l2.next;
    }
    list = list.next;
  }

  return head.next;
};

const list1 = [1, 2, 4];
const list2 = [1, 3, 4];

console.log(mergeTwoLists(list1, list2));
