import { ReactNode } from "react";

export interface PropsParentChildData {
    title: string;
    className: string;
    listTitle: string;
    onNotifyParent: (text: string) => void;
}


export interface PropsChildrenData {
    title: string;
    children: ReactNode
}