class Yeet {
    //Converted from your face
    getInfo() {
        return {
            "id": "Yeet",
            "name": "Yeet",
            "blocks": [{
                "opcode": "ycheck",
                "blockType": "Boolean",
                "text": "did you yeet urself today?",
                "arguments": {}
            }, {
                "opcode": "9",
                "blockType": "reporter",
                "text": "9 [greenFlag]",
                "arguments": {
                    "color": {
                        "type": "string",
                        "defaultValue": "9 lol"
                    }
                }
            }, {
                "opcode": "thing",
                "blockType": "reporter",
                "text": "plz have some [r] tea [g] thx[b]",
                "arguments": {
                    "r": {
                        "type": "number",
                        "defaultValue": 255
                    },
                    "g": {
                        "type": "number",
                        "defaultValue": 0
                    },
                    "b": {
                        "type": "number",
                        "defaultValue": 0
                    }
                }
            }, {
                "opcode": "movie characters",
                "blockType": "reporter",
                "text": "[num] favorite movie is [string]",
                "arguments": {
                    "num": {
                        "type": "number",
                        "defaultValue": 5
                    },
                    "string": {
                        "type": "string",
                        "defaultValue": "p i c k a m o v i e"
                    }
                }
            }, {
                "opcode": "soop",
                "blockType": "reporter",
                "text": "if [bool] is clicked then [text1] else [text2] E L S E [text3]",
                "arguments": {
                    "bool": {
                        "type": "Boolean",
                        "defaultValue": ""
                    },
                    "text1": {
                        "type": "string",
                        "defaultValue": "9"
                    },
                    "text2": {
                        "type": "string",
                        "defaultValue": "7"
                    }
                    "text3": {
                        "type": "string",
                        "defaultValue": "help me plz"
                }
            }, {
                "opcode": "alertbox",
                "blockType": "command",
                "text": "alert [string] to yo [familyMember]",
                "arguments": {
                    "string": {
                        "type": "string",
                        "defaultValue": "my face in on fire"
                    }
                    "familyMember"": {
                        "type": "string",
                        "defaultValue": "momma"
                }
            }, {
                "opcode": "whenThis",
                "blockType": "hat",
                "text": "when [bool] is mine, make this [string] mine TOO HAHAHA",
                "arguments": {
                    "bool": {
                        "type": "Boolean",
                        "defaultValue": ""
                    }
                    "string": {
                        "type": "string",
                        "defaultValue": "triangular sign"
                }
            }, {
                "opcode": "mathy",
                "blockType": "reporter",
                "text": "[something] hey look! [oper] [dropdown] :D",
                "arguments": {
                    "something": {
                        "type": "number",
                        "defaultValue": "99"
                    },
                    "oper": {
                        "type": "string",
                        "menu": "costumes",
                        "defaultValue": ""
                    },
                    "dropdown": {
                        "type": "number"
                    }
                }
            }, {
                "opcode": "substringy",
                "blockType": "reporter",
                "text": "fat [num1] idk [num2] help me plz :c [string]",
                "arguments": {
                    "num1": {
                        "type": "number",
                        "defaultValue": "2"
                    },
                    "num2": {
                        "type": "number",
                        "defaultValue": "5"
                    },
                    "string": {
                        "type": "string",
                        "defaultValue": "plz help me now :c"
                    }
                }
            }, {
                "opcode": "javablock",
                "blockType": "reporter",
                "text": "hey look at this code [string] USE IT c:<",
                "arguments": {
                    "string": {
                        "type": "string",
                        "defaultValue": "window.alert(\"help :8\")"
                    }
                }
            }, {
                "opcode": "blank",
                "blockType": "command",
                "text": "undefined [string]",
                "arguments": {
                    "string": {
                        "type": "string",
                        "defaultValue": " "
                    }
                }
            }, {
                "opcode": "itOfStr",
                "blockType": "reporter",
                "text": "word [num] of [string] separated by [seper] wow im too lazy to do ANYTHING",
                "arguments": {
                    "num": {
                        "type": "number",
                        "defaultValue": "2"
                    },
                    "string": {
                        "type": "string",
                        "defaultValue": "hello world"
                    },
                    "seper": {
                        "type": "string",
                        "defaultValue": " "
                    }
                }
            }, {
                "opcode": "exclu",
                "blockType": "Boolean",
                "text": "[bool1] will mary [bool2] becayuse [string]",
                "arguments": {
                    "bool1": {
                        "type": "Boolean",
                        "defaultValue": false
                    },
                    "bool2": {
                        "type": "Boolean"
                    }
                    "string": {
                        "type": "string"
                        "defaultValue:" "why not"
                }
            }, {
                "opcode": "strCont",
                "blockType": "Boolean",
                "text": "[string1] yay free space C:",
                "arguments": {
                    "string1": {
                        "type": "string",
                        "defaultValue": "hello world"
                    }
                }
            }, {
                "opcode": "dPrompt",
                "blockType": "reporter",
                "text": "tell user to [prompty]",
                "arguments": {
                    "prompty": {
                        "type": "string",
                        "defaultValue": "use this cool extension :D"
                    }
                }
            }, {
                "opcode": "repAll",
                "blockType": "reporter",
                "text": "replace all of [finder] in [string] with [replacer] for [default] and undefined garbage",
                "arguments": {
                    "finder": {
                        "type": "string",
                        "defaultValue": ""
                    },
                    "string": {
                        "type": "string",
                        "defaultValue": ""
                    },
                    "replacer": {
                        "type": "string",
                        "defaultValue": ""
                    }
                }
            }, {
                "opcode": "greaterOrEqual",
                "blockType": "Boolean",
                "text": "[string1] ≥ [string2] or less than [greenFlag]",
                "arguments": {
                    "string1": {
                        "type": "string",
                        "defaultValue": ""
                    },
                    "string2": {
                        "type": "string",
                        "defaultValue": ""
                    }
                    "string2": {
                        "type": "green flag",
                        "defaultValue": ""
                }
            }, {
                "opcode": "lessOrEqual",
                "blockType": "Boolean",
                "text": "[string1] ≤ [string2] im bored okay",
                "arguments": {
                    "string1": {
                        "type": "string",
                        "defaultValue": ""
                    },
                    "string2": {
                        "type": "string",
                        "defaultValue": ""
                    }
                }
            }, {
                "opcode": "jQuGet",
                "blockType": "reporter",
                "text": "get data from url: [myURL]",
                "arguments": {
                    "myURL": {
                        "type": "string",
                        "defaultValue": "http://google.com"
                    }
                }
            }],
            "menus": {
                costumes: this._formatMenu(['costume1', 'costume2', 'wait', 'costume3', 'there is no costume3', 'none of these are costume 3', 'know what', 'im having fun with dropdowns! :D', 'okay the end :c']),
            }
        };
    }
    ncheck({
        check
    }) {
        return true
    }
    color({
        color
    }) {
        return Math.pow(color, 1);
    }
    rgb({
        r,
        g,
        b
    }) {
        return ((((r * 256) + g) * 256) + b);
    }
    power({
        num,
        power
    }) {
        return Math.pow(num, power);
    }
    textif({
        bool,
        text1,
        text2
    }) {
        if (bool) {
            return text1
        } else {
            return text2
        }

    }
    alertbox({
        string
    }) {
        window.alert(string);
    }
    whenThis({
        bool
    }) {
        return bool;
    }
    mathy({
        num1,
        oper,
        num2
    }) {
        if (oper === '+') {
            return (num1 + num2)
        }
        if (oper === '-') {
            return (num1 - num2)
        }
        if (oper === '*') {
            return (num1 * num2)
        }
        if (oper === '/') {
            return (num1 / num2)
        }
        if (oper === '^') {
            return Math.pow(num1, num2)
        }
        if (oper === 'sqrt') {
            return (num1 * (Math.sqrt(num2)))
        }
    }
    substringy({
        num1,
        num2,
        string
    }) {
        return string.substring(num1 - 1, num2);
    }
    javablock({
        string
    }) {
        return eval(string);
    }
    blank({
        string
    }) {}
    itOfStr({
        num,
        string,
        seper
    }) {
        var str = string;
        var res = str.split(seper);
        return (res[num - 1]);
    }
    exclu({
        bool1,
        bool2
    }) {
        if (bool1 && bool2) {
            return false;
        } else {
            if (bool1) {
                return true;
            }
            if (bool2) {
                return true;
            }
        }
    }
    strCont({
        string1,
        string2
    }) {
        return string1.includes(string2);
    }
    dPrompt({
        prompty
    }) {
        return prompt(prompty);
    }
    repAll({
        finder,
        string,
        replacer
    }) {
        return string.replace(new RegExp(finder, 'gi'), replacer);
    }
    greaterOrEqual({
        string1,
        string2
    }) {
        return (string1 >= string2);
    }
    lessOrEqual({
        string1,
        string2
    }) {
        return (string1 <= string2);
    }
    jQuGet({
        myURL
    }) {

        $.ajaxSetup({
            async: false
        });
        $.get('https://scratch.mit.edu' + myURL, function(data) {
            window.httpdata = data;
        });
        return window.httpdata;
    }
    _formatMenu(menu) {
        const m = [];
        for (let i = 0; i < menu.length; i++) {
            const obj = {};
            obj.text = menu[i];
            obj.value = i.toString();
            m.push(obj);
        }
        return m;
    }
}
Scratch.extensions.register(new Yeet());