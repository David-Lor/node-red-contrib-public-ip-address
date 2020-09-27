module.exports = function(RED) {
    const https = require("https");

    const statusRequesting = (node) => node.status({fill: "blue", shape: "dot", text: "requesting..."});
    const statusKO = (node) => node.status({fill: "red", shape: "ring", text: "failed"});
    const statusClear = (node) => node.status({});

    function PublicIPAddressNode(config) {
        RED.nodes.createNode(this, config);
        const node = this;

        node.on('input', function(msg) {
            statusRequesting(node);

            https.get("https://api64.ipify.org", (resp) => {
                let data = "";

                resp.on("data", (chunk) => {
                    data += chunk;
                });

                resp.on("end", () => {
                    msg.payload = data;
                    statusClear(node);
                    node.send(msg);
                })
            })
            .on("error", (err) => {
                statusKO(node);
                node.error(err.message);
            });
        });
    }

    RED.nodes.registerType("public-ip-address", PublicIPAddressNode);
}
