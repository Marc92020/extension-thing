class Your Mom {
    getInfo() {
        return {
            "id": "soop",
            "name": "Your Mom",
            "blocks": [{
                    "opcode": "substringy",
                    "blockType": "reporter",
                    "text": "do you like [num1] or [num2] or the color [string] because why not",
                    "arguments": {
                        "num1": {
                            "type": "number",
                            "defaultValue": "9"
                        },
                        "num2": {
                            "type": "number",
                            "defaultValue": "0"
                        },
                        "string": {
                            "type": "string",
                            "defaultValue": "this color is cool :D"
                        }
                    }
                },
            }],
        "menus": { //we will get back to this in a later tutorial
        }
    };
    substringy({num1, num2, string}) {
        return string.substring(coolness);
    };
}
Scratch.extensions.register(new Your Mom());