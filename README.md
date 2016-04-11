# Heimdall
![heimdall_painting_by_scampicrevette-d583fqt](https://cloud.githubusercontent.com/assets/2194285/14400609/62447d2e-fdaf-11e5-8ba3-166f741f7107.jpg)

Heimdall is the brother of the warrior weave. He is the all-seeing and all-hearing guardian sentry of the Runnable network who stands on the weave container network bridge to watch for any network outages to Runnable.

## Usage
```
docker run runnable/heimdall <target> [<target> ...]
```


## Output
### stdout
The format of the output will be `IP: message`
message types:
`OK` successful ping
`DestinationUnreachableError` can not reach destination
`PacketTooBigError` Packet is too big
`ParameterProblemError` Invalid input
`RedirectReceivedError` Ping returned
`SourceQuenchError` Device is sending too much data for the destination host to process
`TimeExceededError` Timeout reaching host

```
10.1.1.1: OK
10.2.2.4: ERR: DestinationUnreachableError ...
10.5.6.7: ERR: TimeExceededError ...
```

### exit code
`0` means pings were send out. msg can still be error messages
`non-zero` something went wrong during ping

## Examples
```
heimdall$ node index.js 31.13.76.68 172.217.3.238
172.217.3.238: OK
31.13.76.68: OK
heimdall$ echo $?
0
```

```
heimdall$ node index.js 31.13.76.68 172.217.13.238 172.217.13.239
31.13.76.68: OK
172.217.13.238: ERR: RequestTimedOutError: Request timed out
172.217.32.239: ERR: Error: No route to host
heimdall$ echo $?
0
```

```
heimdall$ node index.js google.com
google.com: ERR: Error: Invalid IP address 'google.com'
heimdall$ echo $?
0
```

```
heimdall$ node index.js
usage: docker run runnable/heimdall <target> [<target> ...]
heimdall$ echo $?
1
```