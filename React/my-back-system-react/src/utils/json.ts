interface TreeNode {
    id: number;
    level: number;
    name: string;
    children?: TreeNode[];
}

interface TransformedNode {
    label: string;
    value: string;
    children?: TransformedNode[];
}

export const transformData = (data: TreeNode[]): TransformedNode[] => {
    if (data[0].name === '中国') {
        return transformData(data[0].children as TreeNode[]);
    }
    return data.map((node) => {
        const transformedNode: TransformedNode = {
            label: node.name,
            value: node.name,
        };

        if (node.children && node.children.length > 0) {
            transformedNode.children = transformData(node.children);
        }

        return transformedNode;
    });
};
