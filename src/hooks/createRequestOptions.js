export const createRequestOptions = (limit = 8, offset = 0) => {
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
