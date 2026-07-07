import { useState, useEffect } from 'react';

export default function ExternalAIInsights() {

    let [AIInsights, setAIInsights] = useState(null);
    let [loading, setLoading] = useState(true);

    useEffect(() => {
        let resInsights = setTimeout(() => {
            // can use fetch() API or axios to get data from external API
            setAIInsights("Hard work pays off. Keep pushing forward and never give up on your dreams!");
            setLoading(false);
        }, 1200);

        return () => clearTimeout(resInsights);
    }, [])

    return (
        <div>
            <h1>External AI Data</h1>
            {loading ? <h2>Loading Ai insight...</h2> : <h2>AI insight loaded!✅</h2>}
            {AIInsights ? <p>{AIInsights}</p> : null}
        </div>
    )
}
