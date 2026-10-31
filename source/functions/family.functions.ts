import { runtime } from '@/runtime.js'
import { Family } from '@/types/family.types.js'

/**
 * Creates a new family with its own identifier registry and counter.
 *
 * @typeParam Name - Optional compile-time label used to distinguish the family.
 * @returns The created family, represented by an opaque numeric value.
 */
export function createFamily<Name extends string = 'no-family'>(): Family<Name> {
    const id = runtime.familyCount++
    runtime.families.add(id)
    runtime.registries.set(id, new Set())
    runtime.counters.set(id, 0)
    return id as Family<Name>
}