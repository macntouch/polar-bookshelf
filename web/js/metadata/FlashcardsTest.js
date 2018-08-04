"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Assertions_1 = require("../test/Assertions");
const Flashcards_1 = require("./Flashcards");
const { Texts } = require("./Texts");
const { TextType } = require("./TextType");
const { FlashcardType } = require("./FlashcardType");
require("../test/TestingTime").freeze();
describe('Flashcards', function () {
    describe('create', function () {
        it("basic", function () {
            let text = Texts.create("This is the text", TextType.MARKDOWN);
            let fields = { text };
            let flashcard = Flashcards_1.Flashcards.create(FlashcardType.CLOZURE, fields);
            let expected = {
                "id": "1HYhuRQ4tz",
                "created": "2012-03-02T11:38:49.321Z",
                "lastUpdated": "2012-03-02T11:38:49.321Z",
                "type": "CLOZURE",
                "fields": {
                    "text": {
                        "MARKDOWN": "This is the text"
                    }
                }
            };
            Assertions_1.assertJSON(flashcard, expected);
        });
    });
    describe('createFromSchemaFormData', function () {
        it("basic", function () {
            let flashcard = Flashcards_1.Flashcards.createFromSchemaFormData(FORM_DATA);
            let expected = {
                "id": "1tDRjUqxJA",
                "created": "2012-03-02T11:38:49.321Z",
                "lastUpdated": "2012-03-02T11:38:49.321Z",
                "type": "BASIC_FRONT_BACK",
                "fields": {
                    "back": {
                        "HTML": "This is the back"
                    },
                    "front": {
                        "HTML": "This is the front"
                    }
                }
            };
            Assertions_1.assertJSON(flashcard, expected);
        });
    });
});
const FORM_DATA = {
    "back": "This is the back",
    "front": "This is the front"
};
const CARD_CREATOR_JSON = {
    "annotationType": "flashcard",
    "context": {
        "docDescriptor": {
            "fingerprint": "1rDeShSojg8migc4SsL4"
        },
        "matchingSelectors": {
            ".area-highlight": {
                "annotationDescriptors": [],
                "elements": [],
                "selector": ".area-highlight"
            },
            ".pagemark": {
                "annotationDescriptors": [],
                "elements": [],
                "selector": ".pagemark"
            },
            ".text-highlight": {
                "annotationDescriptors": [
                    {
                        "docFingerprint": "1rDeShSojg8migc4SsL4",
                        "pageNum": 1,
                        "textHighlightId": "1LS7NToNer",
                        "type": "text-highlight"
                    }
                ],
                "elements": [
                    {}
                ],
                "selector": ".text-highlight"
            }
        }
    },
    "edit": false,
    "errorSchema": {},
    "errors": [],
    "flashcard": {
        "id": "9d146db1-7c31-4bcf-866b-7b485c4e50ea"
    },
    "formData": {
        "back": "This is the back",
        "front": "This is the front"
    },
    "idSchema": {
        "$id": "root",
        "back": {
            "$id": "root_back"
        },
        "front": {
            "$id": "root_front"
        }
    },
    "schema": {
        "description": "",
        "properties": {
            "back": {
                "title": "Back",
                "type": "string"
            },
            "front": {
                "title": "Front",
                "type": "string"
            }
        },
        "required": [
            "front",
            "back"
        ],
        "title": "Flashcard",
        "type": "object"
    },
    "status": "submitted",
    "uiSchema": {
        "back": {},
        "front": {}
    }
};
//# sourceMappingURL=FlashcardsTest.js.map