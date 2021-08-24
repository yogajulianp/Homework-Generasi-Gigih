import React  from "react";
import "./SearchBar.css";
import Data from "./components/Data";
import {useState} from "react";

const getFilteredItems = (query, items) => {
    if  (!query) {
        return items;
    }
    return items.filter(song => song.name.incluedes(query));
}


export default function SearchBar() {
    const [query, setQuery] = useState("");

    const {tracks} = Data;
    const {items} = tracks;
    
    const filteredItems= getFilteredItems(query, items);

    return (
        <div className = "SearchBar">
            <label>Search</label>
            <input type="text" placeholder="Name Playlist" onChange={e=> setQuery(e.target.value)} />
        <ul>
            {filteredItems.map((value) => (
            <h1 key={value.name}>{value.name}</h1>
            
            ))}
        </ul>

        </div>
    );

} ;