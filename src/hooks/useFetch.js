import { useState, useEffect } from 'react';

const useFetch = (url, options) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url, options);
                if (!response.ok) {
                    throw new Error('Something went wrong!');
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url, options]);

    return { data, loading, error };
};

const createRequestOptions = (limit = 10, offset = 0) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
        limit,
        offset
    });

    return {
        method: "POST",
        headers: myHeaders,
        body
    };
};

export { useFetch, createRequestOptions };
