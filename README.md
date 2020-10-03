# node-red-contrib-public-ip-address

This node returns the current Public IP Address, using (currently) the [ipify.org API](https://ipify.org).
Both IPv4 and IPv6 are supported by the ipify API (IPv6 is returned; if not available, IPv4 is returned).

## Changelog

- 0.0.3:
    - update description in package.json to reference that this is a Node-RED Node
- 0.0.2:
    - add a "requesting" and "failed" status label to the node
    - add a Github Actions workflow to publish package to npm
    - add keywords to package.json
    - set node category to "network"
- 0.0.1:
    - initial release, supporting the ipify.org API only (IPv4/6)

## TODO

- Add more public APIs
- Allow to add custom API endpoints
- Validate responses (that a valid IP address is returned)
- Configure if requesting IPv4/6/both (currently both/autodetection)
- Add tests
