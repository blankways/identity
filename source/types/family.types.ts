declare const FamilySymbol: unique symbol

export type Family<Name extends string = 'no-family'> = number & {
    readonly [FamilySymbol]: Name
}
