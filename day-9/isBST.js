function isBST (node, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {

  if (node === null) {
    return true
  }

  if (node.key <= min || node.key > max) {
    return false
  }

  return isBST(node.left, min, node.key) && isBST(node.right, node.key, max);
}

