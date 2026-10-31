import { runtime } from '@/runtime.js'
import { Identifier } from '@/types/identifier.types.js'

/**
 * Registers and returns the next sequential identifier for a family.
 *
 * @typeParam Family - Type of the family the identifier belongs to.
 * @typeParam Type - Optional entity type associated with the identifier.
 * @param family - Family previously created with `Identity.Family.create`.
 * @returns The new identifier, branded with its family and entity type.
 * @throws {Error} If the family was not created by this library instance.
 */
export function createIdentifier<Family, Type = never>(family: Family) {
    if (!runtime.families.has(family as unknown as number))
        throw Error('@blank-js/identity Error: The family given was invalid.')

    const key = family as unknown as number
    const identifiers = runtime.registries.get(key)!
    const currentCount = runtime.counters.get(key)!

    identifiers.add(currentCount)
    runtime.counters.set(key, currentCount + 1)

    return currentCount as Identifier<Family, Type>
}

/**
 * Checks whether an identifier is registered in the specified family.
 *
 * @param family - Family in which to look for the identifier.
 * @param id - Identifier to check.
 * @returns `true` if the identifier's numeric value belongs to the family; otherwise, `false`.
 * @throws {Error} If the family was not created by this library instance.
 */
export function validateIdentifier<Family>(family: Family, id: Identifier<unknown, unknown>) {
    if (!runtime.families.has(family as unknown as number))
        throw Error('@blank-js/identity Error: The family given was invalid.')

    const identifiers = runtime.registries.get(family as unknown as number)

    return typeof id === 'number' && identifiers?.has(id)
}