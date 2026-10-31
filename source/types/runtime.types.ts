export type RuntimeState = {
    readonly registries: Map<number, Set<number>>
    readonly counters: Map<number, number>
    readonly families: Set<number>
    familyCount: number
}