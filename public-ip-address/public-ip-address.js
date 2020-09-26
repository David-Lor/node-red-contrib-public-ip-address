module.exports = function(RED) {
    const https = require("https");

    function PublicIPAddressNode(config) {
        RED.nodes.createNode(this, config);
        const node = this;

        node.on('input', function(msg) {
            https.get("https://api64.ipify.org", (resp) => {
                let data = "";

                resp.on("data", (chunk) => {
                    data += chunk;
                });

                resp.on("end", () => {
                    msg.payload = data;
                    node.send(msg);
                })
            })
            .on("error", (err) => node.error(err.message));
        });
    }

    RED.nodes.registerType("public-ip-address", PublicIPAddressNode);
}
