import { createFamily } from '@/functions/family.functions.js'
import { createIdentifier, validateIdentifier } from '@/functions/identifier.functions.js'

/**
 * Main API for creating families and managing their associated identifiers.
 */
export class Identity {
    /** Operations for creating independent families. */
    public static Family = {
        create: createFamily,
    }

    /** Operations for creating and validating identifiers within a family. */
    public static Identifier = {
        create: createIdentifier,
        validate: validateIdentifier,
    }
}