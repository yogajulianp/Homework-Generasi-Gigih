import React, {useEffect} from "react";
import "./PlayMenu.css";

//GET https://accounts.spotify.com/authorize?client_id=5fe01282e44241328a84e7c5cc169165&response_type=code&redirect_uri=https%3A%2F%2Fexample.com%2Fcallback&scope=user-read-private%20user-read-email&state=34fFs29kd09

const CLIENT_ID = "69872fdb3bce48939db431ac4aab4df8";
const spotify_authorize_endpoint = "https://accounts.spotify.com/authorize";
const redirect_url_after_login = "http://localhost:3000/playmenu";
const SPACE_LIMIT = "%20";
const SCOPES = ["user-read-private","playlist-modify-private"];
const SCOPES_URL_PARAM = SCOPES.join(SPACE_LIMIT);

/*
http://localhost:3000/playmenu#access_token=BQCOtcKaG_jmaMRizWoIabj0O-bcDQ6W5Xqwa3yCYbRRZfAabIefaK_Us4ZkppjOZ6a01I6eo4rB-sxjO99RnkIs8ajqAZv6vb3tFBYwIzbF17qWs9r6VASuvTqLaiEtR__bo9OI1zIYNgEiFTlZ_9M6qTCTYEC1X_pL-4FZ62f-exm3qAhXd8FqwBoDNi6rvezCWQ9kuw&token_type=Bearer&expires_in=3600
*/

const getReturnParamsSpotifyAuth = (hash) => {
    const stringAfterHash = hash.substring(1);
    const paramsInUrl = stringAfterHash.split("&");
    const paramsSplitUp = paramsInUrl.reduce( (accumulater, currentValue) => {
        console.log(currentValue);
        const [key, value] = currentValue.split("=");
        accumulater[key] = value;
        return accumulater;
    }, {});
    return paramsSplitUp;
};

//{access_token, token_type, expirer_in}
const PlayMenu = ()=> {
    useEffect( ()=> {
        if (window.location.hash) {
            const {access_token, token_type, expires_in} = 
            getReturnParamsSpotifyAuth(window.location.hash);
            console.log({access_token, token_type, expires_in});
        }
    });


    const handleLoginSpotify = () => {
        window.location = `${spotify_authorize_endpoint}?client_id=${CLIENT_ID}&redirect_uri=${redirect_url_after_login}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;
    }
    return (
    <div className="tampilan"> 
        <h1>Welcome</h1> 
        <button onClick={handleLoginSpotify}>Login ke Spotify</button>
    </div>
    ) ;
};

export default PlayMenu;