const command = (type) => {
    const serverUrl = process.env.REACT_APP_SERVER_URL
    fetch(`${serverUrl}/player/${type}`)
}


export function next() {
    command('next')
}

export function previous() {
    command('previous')
}

export function play() {
    command('play')
}


export function pause() {
    command('pause')
}



