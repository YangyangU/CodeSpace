// 给定一个二叉树和一个数字n,判断二叉树中是否有一个路径之和为 n

// n 为 22，二叉树的定义如下:
let tree = {
    val: 5,
    left: {
        val: 4,
        left: {
            val: 11,
            left: {
                val: 7
            },
            right: {
                val: 2
            }
        }
    },
    right: {
        val: 8,
        left: {
            val: 13,
            right: {
                val: 1
            }
        },
        right: {
            val: 4
        }
    }
}
const n = 22

// 解法一：深度优先搜索

function hasPathSum(root, target) {
    if (!root) return false
    if (!root.left && !root.right) return root.val === target
    return hasPathSum(root.left, target - root.val) || hasPathSum(root.right, target - root.val)
}

console.log(hasPathSum(tree, n))
