import assert from 'node:assert/strict'
import test from 'node:test'

import { collaborationTypes, serviceOptions } from './collaboration-data.ts'

test('collaboration card service labels match the inquiry options', () => {
  const labels = collaborationTypes.map((item) => item.service)

  assert.deepEqual(labels, serviceOptions.slice(0, 3))
})
