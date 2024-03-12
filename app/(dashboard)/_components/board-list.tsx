"use client"

import { EmptyBoards } from "./empty-boards";
import { EmptyFavorites } from "./empty-favorites";
import { EmptySearch } from "./empty-search";

interface BoardListProps {
    orgId: string;
    query: {
        search?: string;
        favorites?: string
    }
}

export const BoardList = ({
    orgId,
    query,
}: BoardListProps) => {
    const data = []; //TODO: Change to API call

    //user search for something that doesn't exist
    if(!data?.length && query.search) {
        return(
            <EmptySearch/>
        )
    }

    if(!data?.length && query.favorites ) {
        return(
            <EmptyFavorites/>
        )
    }

    //this must be at the bottom after the above two if because if not it will always show no board at all
    if(!data?.length) {
        return(
            <EmptyBoards/>
        )
    }

    return(
        <div>
            {JSON.stringify(query)}
        </div>
    )
}