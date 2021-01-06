const data = {
    value: 0,
    left: {
        value: 1,
        left: {
            value: 3,
            left: {
                value: 7
            }
        },
        right: {
            value: 4
        }
    },
    right: {
        value: 2,
        left: {
            value: 5
        },
        right: {
            value: 6
        }
    }
}

const isBalance = tree => {
    let flag = true

    const getDepth = tree => {
        if (tree === null || tree === undefined || !flag) return 0
        let left = getDepth(tree.left)
        let right = getDepth(tree.right)

        if (Math.abs(left - right) > 1) {
            flag = false;
        }
        return Math.max(left, right) + 1;
    }

    return flag;
}

console.log(isBalance(data));
