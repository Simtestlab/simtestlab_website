import React from "react";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const SidebarNavigation = ({ headings }) => {
    const buildTree = (headings) => {
        const tree = [];
        const stack = [];

        headings.forEach((heading) => {
            const node = { 
                id: heading.id, 
                text: heading.text, 
                children: [] 
            };

            while (stack.length > 0 && stack[stack.length - 1].level >= heading.level) {
                stack.pop();
            }

            if (stack.length === 0) {
                tree.push(node);
            } else {
                stack[stack.length - 1].children.push(node);
            }

            stack.push({ ...node, level: heading.level });
        });

        return tree;
    };

    const treeData = buildTree(headings);

    console.log("Tree Data: ", treeData);

    return (
        <SimpleTreeView
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            sx={{ width: 300, bgcolor: "background.paper", p: 2, boxShadow: 2 }}
        >
            {treeData.map((item) => (
                <NavigationTreeItem key={item.id} item={item} />
            ))}
        </SimpleTreeView>
    );
};

const NavigationTreeItem = ({ item }) => {
    return (
        <TreeItem itemId={item.id} label={item.text}>
            {item.children.map((subItem) => (
                <NavigationTreeItem key={subItem.id} item={subItem} />
            ))}
        </TreeItem>
    );
};

export default SidebarNavigation;
