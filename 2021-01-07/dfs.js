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

const dfs = tree => {
    let stack = [tree]
    let result = [];

    while (stack.length) {
        const item = stack.pop()

        result.push(item.value);
        item.right && stack.push(item.right)
        item.left && stack.push(item.left)

    }

    return result;
}

const bfs = tree => {
    let stack = [tree]
    let result = []

    while (stack.length) {
        const item = stack.pop();
        item.left && stack.unshift(item.left)
        item.right && stack.unshift(item.right)

        result.push(item.value)
    }

    return result
}

console.log(dfs(data));
console.log(bfs(data));
