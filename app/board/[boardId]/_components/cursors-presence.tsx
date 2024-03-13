"use client"

//changes is fast so we use memo
import { memo } from "react"

import { useOthersConnectionIds } from "@/liveblocks.config"
import { Cursor } from "./cursor"

const Cursors = () => {
    const ids = useOthersConnectionIds()

    return(
        <>
            {ids.map((connectionId) => (
                <Cursor
                    key={connectionId}
                    connectionId={connectionId}
                />
            ))}
        </>
    )
}

export const CursorsPresence = memo(() => {
    return(
        <>
            {/* TODO: Draft pencil */}
            <Cursors/>
        </>
    )
})

CursorsPresence.displayName = "CursorPresence"