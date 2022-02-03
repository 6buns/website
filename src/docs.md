# Terms

##  Consumer

Consumer is the media stream of other users in the room, being received by the user. Total consumer count is the sum of all the consumers handled during the room session.

$$
\text{Consumer Calculation Formula} = (N * M * 2)
$$
where,

- **N** is number of users in the room,
- **M** is number of users producing media *(with their camera on, and not mute*),
- **2** is the streams count that is being sent to media server (*one for video, and another for audio*),

```sequence
Title: Each user sends 1 video, and recieves 2 other video.
A->Media Server: A's Video
Media Server-->A:Consumer 1 : B's Video
Media Server-->A:Consumer 2 : C's Video
Note left of A: 3 Producers
B->Media Server: B's Video
Media Server-->B:Consumer 3 : A's Video
Media Server-->B:Consumer 4 : C's Video
Note left of C: 6 Consumers
C->Media Server: C's Video
Media Server-->C:Consumer 5 : B's Video
Media Server-->C:Consumer 6 : A's Video
```

In the above room scenario, media stream from A's camera is being sent to our media server, from where it being sent to three other users who can view the stream. Pricing for this example,

### Pricing Example 1

Cost Calculation Formula = **(Consumers * Minutes) * Unit Cost**,

where, unit cost is **$0.005 per consumer-min**
$$
(6 * 60) * $0.005 = $1.8
$$

In a room of 3 users, and a duration of 60 minutes, where each user is able to see other 2 users video, and vice-versa. In total of 6 consumers, are handled by the media server.

### Pricing Example 2

If you join a room of 100 users, and 6 of them have their camera on :
$$
\text{(users in a room) * (users with camera/min on) * (1 for audio, 2 for video)}
$$
then the number of consumers handled by the room is
$$
100 * 6 * 2 = 1200
$$

If the room is alive for 10 minutes, then the usage charge incurred is,
$$
1200 * 10 * 0.005 = $60 \textit{ (basic realtime stats)}
\newline 1200 * 10 * 0.0052 = $62.4 \textit{ (advanced realtime stats)}
$$

## Rooms

A **room** is a collection of users interacting with each other.

No Charge is levied on creation or updating rooms. Realtime data regarding rooms are charged and an additional $0.002 is added to the **unit cost**.

Pricing Example :

A room of 4 users, wherein all 4 of them have camera on, therefore, total number of consumers is 24,
$$
24 * 20 * 0.005 = $2.4 \textit{ (basic realtime stats)}
\newline 24 * 20 * (0.005 + 0.0002) = $2.496 \sim $2.5 \textit{ (advanced realtime stats)}
$$
where $0.001 is the additional charge for realtime data related to room. This is useful for gaining insights regarding room interaction.

Base Realtime Included which are free,

- Consumer Count
- Producer Count

### Realtime Data
*(for which charge is applied)*

- #### Participant's Data

  - ##### Pipe Transport Data

    ```js
      {
        "probationBytesSent": 0,
        "probationSendBitrate": 0,
        "recvBitrate": 1802072,
        "rtpBytesReceived": 5104571,
        "rtpBytesSent": 0,
        "rtpRecvBitrate": 1835651,
        "rtpSendBitrate": 0,
        "rtxBytesReceived": 0,
        "rtxBytesSent": 0,
        "rtxRecvBitrate": 0,
        "rtxSendBitrate": 0,
        "sendBitrate": 24,
        "timestamp": 924308980,
        "transportId": "352f60cd-10ac-443b-8529-6474ecba2e46",
        "tuple":
        {
          "localIp": "11.22.33.44",
          "localPort": 12455,
          "protocol": "udp",
          "remoteIp": "11.22.33.44",
          "remotePort": 42301
        },
        "type": "pipe-transport"
      }

  - ##### WebRTC Transport Data

    ```js
    {
        "bytesReceived": 5360091,
        "bytesSent": 20988,
        "dtlsState": "connected",
        "iceRole": "controlled",
        "iceSelectedTuple": {
          "localIp": "11.22.33.44",
          "localPort": 56726,
          "protocol": "udp",
          "remoteIp": "55.66.77.88",
          "remotePort": 52320
        },
        "iceState": "completed",
        "probationBytesSent": 0,
        "probationSendBitrate": 0,
        "recvBitrate": 1802072,
        "rtpBytesReceived": 5104571,
        "rtpBytesSent": 0,
        "rtpRecvBitrate": 1835651,
        "rtpSendBitrate": 0,
        "rtxBytesReceived": 179934,
        "rtxBytesSent": 0,
        "rtxRecvBitrate": 0,
        "rtxSendBitrate": 0,
        "sctpState": "connected",
        "sendBitrate": 4992,
        "timestamp": 18079607138,
        "transportId": "a00746bd-0758-4dfc-9f5f-c0ad4eb326d5",
        "type": "webrtc-transport"
      }
    ```

- #### Consumer's Data

  ```js
   {
      "bitrate": 625312,
      "byteCount": 879947,
      "firCount": 0,
      "fractionLost": 0,
      "kind": "video",
      "mimeType": "video/VP8",
      "nackCount": 0,
      "nackPacketCount": 0,
      "packetCount": 979,
      "packetsDiscarded": 0,
      "packetsLost": 0,
      "packetsRepaired": 0,
      "packetsRetransmitted": 0,
      "pliCount": 0,
      "roundTripTime": 33.02,
      "rtxSsrc": 836324070,
      "score": 10,
      "ssrc": 328066115,
      "timestamp": 925531753,
      "type": "outbound-rtp"
    },
    {
      "bitrate": 627872,
      "bitrateByLayer":
      {
        "0.0": 238856,
        "0.1": 145872,
        "0.2": 243144
      },
      "byteCount": 883855,
      "firCount": 0,
      "fractionLost": 0,
      "jitter": 2,
      "kind": "video",
      "mimeType": "video/VP8",
      "nackCount": 0,
      "nackPacketCount": 0,
      "packetCount": 979,
      "packetsDiscarded": 0,
      "packetsLost": 0,
      "packetsRepaired": 0,
      "packetsRetransmitted": 167,
      "pliCount": 2,
      "rtxSsrc": 1976184061,
      "score": 10,
      "ssrc": 2440984788,
      "timestamp": 925531753,
      "type": "inbound-rtp"
    }
  ```

## Active Speaker

Active Speaker is the most dominant speaker among users. In a room of 10 users, where each user has his camera on, it may get confusing, when each of them, is speaking. Therefore, in order to keep a room communication proper, one has to figure out users who are passive speakers, and mute them. Or, you could highlight the active speaker, with a border, so that users know a user is speaking.

It is advised to keep producers (users with camera/mic on) count below 6,  cause if it increases, then each user would have download 6 video streams which would require huge bandwidth, and end users could have performance lag.

You could pause producers, when,

- their chance of speaking is over,
- they go silent,
- Consumers handled by each user is greater than 12,

$$
\text{Consumers handled by each user} = \text{all consumers handled by room} \div \text{users in a room}
$$

# Guides

## zoom clone with Vanilla JS

$$
upcoming
$$

## clubhouse clone with React

$$
upcoming
$$
