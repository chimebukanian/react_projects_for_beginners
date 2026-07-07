import { useEffect, useState } from "react";

export default function CountLikes() {
    let [likes, setLikes] = useState(0);
    let [dislikes, setDislikes] = useState(0);

    // no dependency array: triggers the CB function on every render (mounting) and changes to all state/props
    // e.g calling your useState setter function will trigger a re-render 
    // and this useEffect will run again

    // useEffect(() => {
    //     console.log("Likes: ", likes, "Dislikes: ", dislikes);
    // })

    // dependency array is not empty, in addition to runs on every render (mounting), 
    // the update of items in the array will trigger the function
    useEffect(() => {
        console.log("Likes: ", likes, "Dislikes: ", dislikes);
    }, [likes])

    return (
        <div>
            <h1>Likes: {likes}</h1>
            <h1>Dislikes: {dislikes}</h1>
            <button onClick={() => setLikes(likes + 1)}>Like: {likes}</button>
            <button onClick={() => setDislikes(dislikes + 1)}>Dislike: {dislikes}</button>
        </div>
    )
}