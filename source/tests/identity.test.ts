import { describe, expect, it } from 'vitest'
import { Identity } from '../index.js'
import type { Family } from '../index.js'

describe('Identity.Family', () => {
    it('creates a family that can be used to create identifiers', () => {
        const family: Family<'users'> = Identity.Family.create<'users'>()

        expect(() => Identity.Identifier.create(family)).not.toThrow()
    })
})

describe('Identity.Identifier', () => {
    it('creates sequential identifiers within a family', () => {
        const family = Identity.Family.create()

        expect(Identity.Identifier.create(family)).toBe(0)
        expect(Identity.Identifier.create(family)).toBe(1)
    })

    it('validates identifiers created for a family', () => {
        const family = Identity.Family.create()
        const identifier = Identity.Identifier.create(family)

        expect(Identity.Identifier.validate(family, identifier)).toBe(true)
        expect(Identity.Identifier.validate(family, (identifier + 1) as typeof identifier)).toBe(false)
    })

    it('rejects unknown families when creating or validating identifiers', () => {
        const family = 'unknown-family'
        const validFamily = Identity.Family.create()
        const identifier = Identity.Identifier.create(validFamily)

        expect(() => Identity.Identifier.create(family)).toThrow(
            '@blank-js/identity Error: The family given was invalid.'
        )
        expect(() => Identity.Identifier.validate(family, identifier)).toThrow(
            '@blank-js/identity Error: The family given was invalid.'
        )
    })
})
