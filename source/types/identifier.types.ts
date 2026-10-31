declare const FamilySymbol: unique symbol

export type Identifier<Family, Type = never> = number & {
    readonly [FamilySymbol]: Family
    readonly [TypeKey: string]:
        [Type] extends [never] ? unknown : Type
}