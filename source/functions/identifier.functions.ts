import { runtime } from '@/runtime.js'
import { Identifier } from '@/types/identifier.types.js'

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

export function validateIdentifier<Family>(family: Family, id: Identifier<unknown, unknown>) {
    if (!runtime.families.has(family as unknown as number))
        throw Error('@blank-js/identity Error: The family given was invalid.')

    const identifiers = runtime.registries.get(family as unknown as number)

    return typeof id === 'number' && identifiers?.has(id)
}