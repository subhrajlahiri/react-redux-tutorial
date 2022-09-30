import React, {useContext} from 'react';
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage() {

    const favoritesCtx = useContext(FavoritesContext);

    let content = favoritesCtx.totalFavorites === 0
        ? <p>No Favorites Stored</p>
        : <MeetupList meetups={favoritesCtx.favorites}/>

    return (
        <section>
            <h1>My Favorites</h1>
            {content}
        </section>
    );
}

export default FavoritesPage;