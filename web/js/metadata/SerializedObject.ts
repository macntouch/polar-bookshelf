
/**
 * Basic serialized object pattern. Take a closure as an argument to init,
 * and then assign the fields.  Then setup and validate that we have our
 * required data structures.
 */
export class SerializedObject {

    constructor(val: Partial<SerializedObject>) {
        // noop
    }

    init(val: any) {

        if(arguments.length > 1) {
            throw new Error("Too many arguments");
        }

        if(typeof val === "object") {
            Object.assign(this, val);
            this.setup();
            this.validate();
        }

    }

    setup() {

    }

    validate() {

    }

}
