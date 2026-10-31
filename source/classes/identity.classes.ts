import { createFamily } from '@/functions/family.functions.js'
import { createIdentifier, validateIdentifier } from '@/functions/identifier.functions.js'

export class Identity {
    public static Family = {
        create: createFamily,
    }

    public static Identifier = {
        create: createIdentifier,
        validate: validateIdentifier,
    }
}