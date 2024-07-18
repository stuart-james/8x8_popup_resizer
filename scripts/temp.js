const tempStr = `Tenant: centerfornyc01/na17
Channel: HOPP/18554663456
Queue: <Unavailable>/<Unavailable>
    VM Queue: HOPP English/centerfornyc01~~queue~~vmail~~110

    Calling Name: 353830482269

    Calling Line ID: 353830482269

    Contact Name: <Unavailable>

    Interaction GUID: int-190c4aec4e6-jw2FeIwba4Y00zOEXgyqtqqR3-phone-03-centerfornyc01
    Interaction Arrival Time: 07/18/2024 03:11:46 AM/-0400
    Transaction Id: 1021564
    Voicemail Begin Offset: 75 seconds
    Voicemail Duration: 11 seconds
    Filename and Size: 4c5e4e24-1ed9-4205-9d92-3ce650a81ac1_1721286781.wav / 180844 bytes`



const parsedObj  = tempStr.split("\n").reduce( (result, line) => {
    let stripedLine = line.trim()
    if (stripedLine){
        const parts = stripedLine.split(":")
        if (parts.length === 2){
            result[parts[0].replace(/\s+/g, "")] = parts[1].trim()
        }

    }
    return result
}, {})

console.log(parsedObj)