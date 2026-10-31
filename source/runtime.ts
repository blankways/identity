import type { RuntimeState } from '@/types/runtime.types.js'

export const runtime: RuntimeState = {
    registries: new Map(),
    counters: new Map(),
    families: new Set(),
    familyCount: 0
}