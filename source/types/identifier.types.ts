declare const FamilySymbol: unique symbol

/**
 * Identifier number branded with its family and, optionally, its entity type.
 *
 * @typeParam Family - Family that owns the identifier.
 * @typeParam Type - Associated entity type; defaults to an unrestricted value.
 */
export type Identifier<Family, Type = never> = number & {
    readonly [FamilySymbol]: Family
    readonly [TypeKey: string]:
        [Type] extends [never] ? unknown : Type
}