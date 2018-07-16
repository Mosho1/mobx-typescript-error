import { types } from 'mobx-state-tree'

const Foo = types.model('Foo', {
    name: types.optional(types.string, ''),
});

export const Bar = types.model('Bar', {
    foos: types.optional(types.array(Foo), []),
});

types.optional(types.map(Bar), {});
