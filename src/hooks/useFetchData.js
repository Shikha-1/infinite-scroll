import { useCallback, useEffect, useState } from "react";
import { createRequestOptions } from "./createRequestOptions";

const URL = 'https://api.weekday.technology/adhoc/getSampleJdJSON';

export const useFetchData = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [postData, setPostData] = useState([]);
    const [page, setPage] = useState(0);
    const [totalPageCount, setTotalPageCount] = useState(0)

    const fetchData = useCallback(async (newOptions, newPage) => {
        setLoading(true);
        try {
            const response = await fetch(URL, newOptions);
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            const data = await response.json();
            setTotalPageCount(data?.totalCount ?? 0);
            setPostData((prevData) => [...prevData, ...(data?.jdList ?? [])]);
            setPage(newPage);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        const options = createRequestOptions(10, 0);
        fetchData(options, 0);
    }, [fetchData]);

    return { loading, error, postData, fetchData, page, totalPageCount };
};