import React from "react";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const scrollToHeading = (id) => {
    const element = document.getElementById(id);
    if (element) {
        const yOffset = -80;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
    }
};

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
        >
            {treeData.map((item) => (
                <NavigationTreeItem key={item.id} item={item} onItemClick={scrollToHeading}/>
            ))}
        </SimpleTreeView>
    );
};

const NavigationTreeItem = ({ item, onItemClick }) => {
    return (
        <TreeItem itemId={item.id} label={item.text} onClick={() => onItemClick(item.id)} >
            {item.children.map((subItem) => (
                <NavigationTreeItem key={subItem.id} item={subItem} onItemClick={scrollToHeading}/>
            ))}
        </TreeItem>
    );
};

export default SidebarNavigation;
