

export const playerFetch = (type, method) => {
    const serverUrl = process.env.REACT_APP_SERVER_URL

    //await here. should be awaited fetch is an async function
    
    return fetch(`${serverUrl}/player/${type}`, {
        method: method
    })
}
