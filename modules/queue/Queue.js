class _Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
  }

  enqueue(data) {
    const node = new _Node(data)
    if (this.first === null) {
      this.first = node
    }
    if (this.last) {
      this.last.next = node
    }
    this.last = node
  }

  dequeue() {
    if (this.first === null) {
      return
    }
    const node = this.first
    this.first = this.first.next
    if (node === this.last) {
      this.last = null
    }
    return node.value
  }

  show() {
    if (this.first) {
      return this.first
    }
  }

  all() {
    if (this.first === null) {
      return
    }
    const items = []
    let node = this.first
    do {
      items.push(node.value)
      node = node.next
    }
    while (node)
    return items
  }
}

module.exports = Queue
