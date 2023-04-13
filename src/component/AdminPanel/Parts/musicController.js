const command = (type, method) => {
    const serverUrl = process.env.REACT_APP_SERVER_URL
    fetch(`${serverUrl}/player/${type}`, {
        method: method
    })
}



export async function musicState(){
    return command('state', 'GET');
}

export function next() {
    command('next', 'POST')
}

export function previous() {
    command('previous', 'POST')
}

export function play() {
    command('play', 'POST')
}


export function pause() {
    command('pause', 'POST')
}



