import React, { Component } from 'react'
import FilmRow from './FilmRow'

class FilmListing extends Component {
    render() {
        let allFilms = this.props.films.map((film, i) => {
            return (
                <div className="film-row">
                    <FilmRow film={film} key={`filmRow-${i}`} />
                </div>
            )
        })
        return (
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                {allFilms}
            </div>
        )
    }
}

export default FilmListing