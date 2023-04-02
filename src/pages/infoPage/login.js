export async function login(password) {
    const serverUrl = process.env.REACT_APP_SERVER_URL

    const response = fetch(`${serverUrl}/authorizeLogin/${password}`)
    return await response

}