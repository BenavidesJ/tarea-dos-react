import React from "react";

export interface Movies {
    adult?: boolean;
    backdrop_path?: string;
    id?: number;
    genre_ids?: GenreIds;
    original_language?: string;
    original_title?: string;
    overview?: string;
    popularity?: number;
    poster_path?: string;
    release_date?: string;
    title?: string
    video?: boolean;
    vote_average?: number;
    vote_count?: number;
}

export interface  GenreIds{
    genre_ids: [];
}

export const MoviesList: React.FC<Movies> = (props) => {
    return(
        <h1>Lista de peliculas</h1>
    )
}