import React, {FC, memo} from "react"

interface SidebarBlockProps {
    title: string,
    children: React.ReactNode
}

export const SidebarBlock: FC<SidebarBlockProps> = memo(({title, children}) => {
    return <div className="flex-1 p-2 border m-2 text-center">
        <h6
            className="text-lg font-semibold leading-7 text-slate-900 pb-1 border-b">{title}</h6>
        <div className="settings p-2">
            {children}
        </div>
    </div>
})