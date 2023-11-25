const APP_ID = "f4b7e55cfd524c7db7b12ac1b12b0310"
const CHANNEL = "main"
const TOKEN = "007eJxTYJhYF5eTaXeDU3GH2X0lo4pnk+fXycTJbylcbve07O27RwsVGNJMksxTTU2T01JMjUySzVOSzJMMjRKTDYFkkoGxoUGjclJqQyAjw5fUHhZGBggE8VkYchMz8xgYAGKZH/k="
let UID;

const client = AgoraRTC.createClient({mode:"rtc", codec:"vp8"})

let localTracks = []
let remoteUsers = {}

let joinAndDisplayLocalStream = async () => {
    UID = await client.join(APP_ID, CHANNEL, TOKEN, null)

    localTracks =  await AgoraRTC.createMicrophoneAndCameraTracks()

    let player = `<div class="video-container" id="user-container-${UID}">
                            <div class="username-wrapper"><span class="user-name">My Name</span></div>
                            <div class="video-player" id="user-${UID}"></div>
                        </div>`

    document.getElementById("video-streams").insertAdjacentHTML("beforeend", player)

    localTracks[1].play(`user-${UID}`)

    await client.publish([localTracks[0], localTracks[1]])
}

joinAndDisplayLocalStream()