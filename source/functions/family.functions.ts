import { runtime } from '@/runtime.js'

export function createFamily<FamilyName extends string = 'no-family'>(): FamilyName {
    const id = runtime.familyCount++
    runtime.families.add(id)
    runtime.registries.set(id, new Set())
    runtime.counters.set(id, 0)
    return id as unknown as FamilyName
}