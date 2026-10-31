import { runtime } from '@/runtime.js'
import { Family } from '@/types/family.types.js'

export function createFamily<Name extends string = 'no-family'>(): Family<Name> {
    const id = runtime.familyCount++
    runtime.families.add(id)
    runtime.registries.set(id, new Set())
    runtime.counters.set(id, 0)
    return id as Family<Name>
}