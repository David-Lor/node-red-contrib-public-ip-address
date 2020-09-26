# Public IP Address Node-RED Node

This node returns the current Public IP Address, using (currently) the [ipify.org API](https://ipify.org).
Both IPv4 and IPv6 are supported by the ipify API (IPv6 is returned; if not available, IPv4 is returned).

## Changelog

- 0.0.1: initial release, supporting the ipify.org API only (IPv4/6)

## TODO

- Add more public APIs
- Allow to add custom API endpoints
- Validate responses (that a valid IP address is returned)
