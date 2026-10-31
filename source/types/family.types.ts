declare const FamilySymbol: unique symbol

/**
 * Nominal brand for a family. The brand exists only in the type system;
 * its corresponding runtime value is a number.
 *
 * @typeParam Name - Optional label used to distinguish families at compile time.
 */
export type Family<Name extends string = 'no-family'> = number & {
    readonly [FamilySymbol]: Name
}
