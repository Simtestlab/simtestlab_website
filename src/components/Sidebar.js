import React from "react";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const scrollToHeading = (id, contentRef, onClose) => {
    const element = document.getElementById(id);
    if (element) {
        const headerHeight = document.querySelector('.MuiAppBar-root')?.offsetHeight || 64;
        const extraPadding = 20;

        const contentRect = contentRef.current.getBoundingClientRect();
        const elementRect = element.getBoundingClientRect();
        const scrollPosition = elementRect.top - contentRect.top + contentRef.current.scrollTop - headerHeight - extraPadding;

        contentRef.current.scrollTo({
            top: scrollPosition,
            behavior: "smooth"
        })

        setTimeout(() => {
            element.focus({ preventScroll: true });
        }, 100);

        if (onClose) {
            onClose();
        }
    }
};

const SidebarNavigation = ({ headings, contentRef, onClose }) => {
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

    return (
        <SimpleTreeView
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
        >
            {treeData.map((item) => (
                <NavigationTreeItem key={item.id} item={item} onItemClick={(id) => scrollToHeading(id, contentRef, onClose)}/>
            ))}
        </SimpleTreeView>
    );
};

const NavigationTreeItem = ({ item, onItemClick }) => {
    const hasChildren = item.children && item.children.length > 0;

    const handleSingleClick = (e) => {
        if (!hasChildren) {
            onItemClick(item.id);
        }
    };

    const handleDoubleClick = (e) => {
        if (hasChildren) {
            onItemClick(item.id);
        }
    };

    return (
        <TreeItem
            itemId={item.id}
            label={item.text} 
            onClick={handleSingleClick}
            onDoubleClick={handleDoubleClick}
            sx={{
                '& .MuiTreeItem-content': {
                    padding: "4px 8px",
                    cursor: "pointer"
                }
            }}
        >
            {item.children.map((subItem) => (
                <NavigationTreeItem key={subItem.id} item={subItem} onItemClick={onItemClick}/>
            ))}
        </TreeItem>
    );
};

export default SidebarNavigation;
