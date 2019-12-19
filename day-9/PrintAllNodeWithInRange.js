function printAllNodeWithInRange (node, low, high) {
  if (node === null) {
    return null
  }

  if (node.key > low) {
    this.printAllNodeWithInRange(node.left, low, high);
  }
  if (node.key >= low && node.key <= high) {
    console.log(node);
  }
  if (high > node.key) {
    this.printAllNodeWithInRange(node.right, low, high)
  }
}