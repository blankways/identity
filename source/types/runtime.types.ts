/** Internal structures that track families and identifiers. */
export type RuntimeState = {
    /** Registered identifiers, indexed by each family's numeric ID. */
    readonly registries: Map<number, Set<number>>
    /** Next available number for each family. */
    readonly counters: Map<number, number>
    /** Numeric IDs of created families. */
    readonly families: Set<number>
    /** Next numeric ID available for a new family. */
    familyCount: number
}