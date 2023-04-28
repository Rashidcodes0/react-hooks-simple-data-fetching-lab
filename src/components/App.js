// create your App component here
import React, { useState, useEffect } from "react";

function App() {
    const [loading, setLoading] = useState(true);
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        async function fetchRandomDogImage() {
            setLoading(true);
            const response = await fetch(
                "https://dog.ceo/api/breeds/image/random"
            );
            const data = await response.json();
            setImageUrl(data.message);
            setLoading(false);
        }

        fetchRandomDogImage();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <img src={imageUrl} alt="A Random Dog" />
        </div>
    );
}

export default App;
