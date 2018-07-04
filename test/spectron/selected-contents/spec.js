const assert = require('assert');
const {assertJSON} = require("../../../web/js/test/Assertions");
const {Spectron} = require("../../../web/js/test/Spectron");
const {Functions} = require("../../../web/js/util/Functions");

describe('SelectContents of HTML entities.', function () {

    this.timeout(10000);

    Spectron.setup(__dirname);

    it('Test of select contents... ', async function () {

        assert.equal(await this.app.client.getWindowCount(), 1);

        /**
         * @type {Electron.WebContents}
         */
        let webContents = this.app.webContents;

        assert.ok(webContents);
        assert.ok(webContents.executeJavaScript);


        let executed = await this.app.client.execute(() => {

            const {MockSelections} = require("../../../web/js/highlights/text/selection/MockSelections");
            const {SelectedContents} = require("../../../web/js/highlights/text/selection/SelectedContents");
            const {SimpleHighlightRenderer} = require("../../../web/js/highlights/text/view/SimpleHighlightRenderer.js");

            MockSelections.createSyntheticSelection({ node: document.querySelector("#n4"), offset: 0},
                                                    { node: document.querySelector("#n7").firstChild, offset: 35});

            let selectedContents = SelectedContents.compute(window);
            SimpleHighlightRenderer.renderSelectedContents(selectedContents);

            // we have to stringify ourselves because the webdriver re-orders
            // the keys on us which is annoying.
            return JSON.stringify(selectedContents, null, "  ");


        });

        let expected = {
            "text": "interesting text.\n\nParagraph two starts here.\n\nthis is just raw text with",
            "html": "<b>interesting</b> text.\n    \n\n    \n        Paragraph two starts <i>here</i>.\n    \n\n    \n        this is just raw text with",
            "rectTexts": [
                {
                    "clientRects": {
                        "0": {
                            "x": 188.234375,
                            "y": 67.4375,
                            "width": 99.1875,
                            "height": 19,
                            "top": 67.4375,
                            "right": 287.421875,
                            "bottom": 86.4375,
                            "left": 188.234375
                        }
                    },
                    "boundingClientRect": {
                        "x": 188.234375,
                        "y": 67.4375,
                        "width": 99.1875,
                        "height": 19,
                        "top": 67.4375,
                        "right": 287.421875,
                        "bottom": 86.4375,
                        "left": 188.234375
                    },
                    "boundingPageRect": {
                        "left": 188.234375,
                        "top": 67.4375,
                        "right": 287.421875,
                        "bottom": 86.4375,
                        "width": 99.1875,
                        "height": 19,
                        "x": 188.234375,
                        "y": 67.4375
                    },
                    "text": "interesting"
                },
                {
                    "clientRects": {
                        "0": {
                            "x": 287.421875,
                            "y": 67.4375,
                            "width": 41.515625,
                            "height": 19,
                            "top": 67.4375,
                            "right": 328.9375,
                            "bottom": 86.4375,
                            "left": 287.421875
                        }
                    },
                    "boundingClientRect": {
                        "x": 287.421875,
                        "y": 67.4375,
                        "width": 41.515625,
                        "height": 19,
                        "top": 67.4375,
                        "right": 328.9375,
                        "bottom": 86.4375,
                        "left": 287.421875
                    },
                    "boundingPageRect": {
                        "left": 287.421875,
                        "top": 67.4375,
                        "right": 328.9375,
                        "bottom": 86.4375,
                        "width": 41.515625,
                        "height": 19,
                        "x": 287.421875,
                        "y": 67.4375
                    },
                    "text": " text.\n    "
                },
                {
                    "clientRects": {
                        "0": {
                            "x": 8,
                            "y": 102.4375,
                            "width": 176.234375,
                            "height": 19,
                            "top": 102.4375,
                            "right": 184.234375,
                            "bottom": 121.4375,
                            "left": 8
                        }
                    },
                    "boundingClientRect": {
                        "x": 8,
                        "y": 102.4375,
                        "width": 176.234375,
                        "height": 19,
                        "top": 102.4375,
                        "right": 184.234375,
                        "bottom": 121.4375,
                        "left": 8
                    },
                    "boundingPageRect": {
                        "left": 8,
                        "top": 102.4375,
                        "right": 184.234375,
                        "bottom": 121.4375,
                        "width": 176.234375,
                        "height": 19,
                        "x": 8,
                        "y": 102.4375
                    },
                    "text": "\n        Paragraph two starts "
                },
                {
                    "clientRects": {
                        "0": {
                            "x": 184.234375,
                            "y": 102.4375,
                            "width": 36.890625,
                            "height": 19,
                            "top": 102.4375,
                            "right": 221.125,
                            "bottom": 121.4375,
                            "left": 184.234375
                        }
                    },
                    "boundingClientRect": {
                        "x": 184.234375,
                        "y": 102.4375,
                        "width": 36.890625,
                        "height": 19,
                        "top": 102.4375,
                        "right": 221.125,
                        "bottom": 121.4375,
                        "left": 184.234375
                    },
                    "boundingPageRect": {
                        "left": 184.234375,
                        "top": 102.4375,
                        "right": 221.125,
                        "bottom": 121.4375,
                        "width": 36.890625,
                        "height": 19,
                        "x": 184.234375,
                        "y": 102.4375
                    },
                    "text": "here"
                },
                {
                    "clientRects": {
                        "0": {
                            "x": 221.125,
                            "y": 102.4375,
                            "width": 5.078125,
                            "height": 19,
                            "top": 102.4375,
                            "right": 226.203125,
                            "bottom": 121.4375,
                            "left": 221.125
                        }
                    },
                    "boundingClientRect": {
                        "x": 221.125,
                        "y": 102.4375,
                        "width": 5.078125,
                        "height": 19,
                        "top": 102.4375,
                        "right": 226.203125,
                        "bottom": 121.4375,
                        "left": 221.125
                    },
                    "boundingPageRect": {
                        "left": 221.125,
                        "top": 102.4375,
                        "right": 226.203125,
                        "bottom": 121.4375,
                        "width": 5.078125,
                        "height": 19,
                        "x": 221.125,
                        "y": 102.4375
                    },
                    "text": ".\n    "
                },
                {
                    "clientRects": {
                        "0": {
                            "x": 8,
                            "y": 137.4375,
                            "width": 196.5,
                            "height": 19,
                            "top": 137.4375,
                            "right": 204.5,
                            "bottom": 156.4375,
                            "left": 8
                        }
                    },
                    "boundingClientRect": {
                        "x": 8,
                        "y": 137.4375,
                        "width": 196.5,
                        "height": 19,
                        "top": 137.4375,
                        "right": 204.5,
                        "bottom": 156.4375,
                        "left": 8
                    },
                    "boundingPageRect": {
                        "left": 8,
                        "top": 137.4375,
                        "right": 204.5,
                        "bottom": 156.4375,
                        "width": 196.5,
                        "height": 19,
                        "x": 8,
                        "y": 137.4375
                    },
                    "text": "\n        this is just raw text with"
                }
            ]
        };

        assertJSON(executed.value, expected);

    });

    it('Test of select into the next h1.... ', async function () {

        assert.equal(await this.app.client.getWindowCount(), 1);

        /**
         * @type {Electron.WebContents}
         */
        let webContents = this.app.webContents;

        assert.ok(webContents);
        assert.ok(webContents.executeJavaScript);


        let executed = await this.app.client.execute(() => {

            const {MockSelections} = require("../../../web/js/highlights/text/selection/MockSelections");
            const {SelectedContents} = require("../../../web/js/highlights/text/selection/SelectedContents");
            const {SimpleHighlightRenderer} = require("../../../web/js/highlights/text/view/SimpleHighlightRenderer.js");

            MockSelections.createSyntheticSelection({ node: document.querySelector("#n7").firstChild, offset: 0},
                                                    { node: document.querySelector("#n8"), offset: 0});

            let selectedContents = SelectedContents.compute(window);
            SimpleHighlightRenderer.renderSelectedContents(selectedContents);

            // we have to stringify ourselves because the webdriver re-orders
            // the keys on us which is annoying.
            return JSON.stringify(selectedContents, null, "  ");


        });

        let expected = {
            "text": "this is just raw text without any inner elements. this is just raw text without any inner elements. this is just raw text without any inner elements. this is just raw text without any inner elements.\n\n",
            "html": "\n        this is just raw text without any inner elements.\n        this is just raw text without any inner elements.\n        this is just raw text without any inner elements.\n        this is just raw text without any inner elements.\n    \n\n    ",
            "rectTexts": [
                {
                    "clientRects": {
                        "0": {
                            "x": 8,
                            "y": 137.4375,
                            "width": 393.671875,
                            "height": 19,
                            "top": 137.4375,
                            "right": 401.671875,
                            "bottom": 156.4375,
                            "left": 8
                        },
                        "1": {
                            "x": 401.671875,
                            "y": 137.4375,
                            "width": 388.578125,
                            "height": 19,
                            "top": 137.4375,
                            "right": 790.25,
                            "bottom": 156.4375,
                            "left": 401.671875
                        },
                        "2": {
                            "x": 8,
                            "y": 156.4375,
                            "width": 393.671875,
                            "height": 19,
                            "top": 156.4375,
                            "right": 401.671875,
                            "bottom": 175.4375,
                            "left": 8
                        },
                        "3": {
                            "x": 401.671875,
                            "y": 156.4375,
                            "width": 388.578125,
                            "height": 19,
                            "top": 156.4375,
                            "right": 790.25,
                            "bottom": 175.4375,
                            "left": 401.671875
                        }
                    },
                    "boundingClientRect": {
                        "x": 8,
                        "y": 137.4375,
                        "width": 782.25,
                        "height": 38,
                        "top": 137.4375,
                        "right": 790.25,
                        "bottom": 175.4375,
                        "left": 8
                    },
                    "boundingPageRect": {
                        "left": 8,
                        "top": 137.4375,
                        "right": 790.25,
                        "bottom": 175.4375,
                        "width": 782.25,
                        "height": 38,
                        "x": 8,
                        "y": 137.4375
                    },
                    "text": "\n        this is just raw text without any inner elements.\n        this is just raw text without any inner elements.\n        this is just raw text without any inner elements.\n        this is just raw text without any inner elements.\n    "
                }
            ]
        };

        assertJSON(executed.value, expected);

    });

    it('Test of select with start and end offsets in a text node', async function () {

        assert.equal(await this.app.client.getWindowCount(), 1);

        /**
         * @type {Electron.WebContents}
         */
        let webContents = this.app.webContents;

        assert.ok(webContents);
        assert.ok(webContents.executeJavaScript);


        let executed = await this.app.client.execute(() => {

            const {MockSelections} = require("../../../web/js/highlights/text/selection/MockSelections");
            const {SelectedContents} = require("../../../web/js/highlights/text/selection/SelectedContents");
            const {SimpleHighlightRenderer} = require("../../../web/js/highlights/text/view/SimpleHighlightRenderer.js");

            MockSelections.createSyntheticSelection({ node: document.querySelector("#n7").firstChild, offset: 20},
                                                    { node: document.querySelector("#n7").firstChild, offset: 45});

            let selectedContents = SelectedContents.compute(window);
            SimpleHighlightRenderer.renderSelectedContents(selectedContents);

            // we have to stringify ourselves because the webdriver re-orders
            // the keys on us which is annoying.
            return JSON.stringify(selectedContents, null, "  ");

        });

        let expected = {
            "text": "t raw text without any in",
            "html": "t raw text without any in",
            "rectTexts": [
                {
                    "clientRects": {
                        "0": {
                            "x": 85.03125,
                            "y": 137.4375,
                            "width": 200.3125,
                            "height": 19,
                            "top": 137.4375,
                            "right": 285.34375,
                            "bottom": 156.4375,
                            "left": 85.03125
                        }
                    },
                    "boundingClientRect": {
                        "x": 85.03125,
                        "y": 137.4375,
                        "width": 200.3125,
                        "height": 19,
                        "top": 137.4375,
                        "right": 285.34375,
                        "bottom": 156.4375,
                        "left": 85.03125
                    },
                    "boundingPageRect": {
                        "left": 85.03125,
                        "top": 137.4375,
                        "right": 285.34375,
                        "bottom": 156.4375,
                        "width": 200.3125,
                        "height": 19,
                        "x": 85.03125,
                        "y": 137.4375
                    },
                    "text": "t raw text without any in"
                }
            ]
        };

        assertJSON(executed.value, expected);

    });

});