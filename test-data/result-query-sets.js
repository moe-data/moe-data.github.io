const makeSet = ({ name, t, o, e = '', q = 'c', s = 'ratio', a = '100', l = 'false', result = null }) => ({
  name,
  query: `?t=${t}&q=${q}&o=${o}&e=${e}&s=${s}&a=${a}&l=${l}`,
  expected: { t, o, e, q, s, a, l },
  result,
})

const querySets = [
  makeSet({ name: 'default-1', t: '202601', o: '1', result: { filted: 551, isonl: 551 } }),
  makeSet({ name: 'default-2', t: '202601', o: '2', result: { filted: 658, isonl: 658 } }),
  makeSet({ name: 'default-201', t: '202603', o: '201', q: 'd', result: { filted: 441, isonl: 441 } }),
  // these entries intentionally contain incorrect expected results to exercise
  // the "must-fail" guard in tests
  makeSet({ name: 'default-1-must-fail', t: '202601', o: '1', result: { filted: 0, isonl: 0 } }),
  makeSet({ name: 'default-2-must-fail', t: '202601', o: '2', result: { filted: 0, isonl: 0 } }),
  makeSet({ name: 'default-basic', t: '202601', o: '100', result: { filted: 848, isonl: 848 } }),
  makeSet({ name: 'with-e', t: '202601', o: '101', e: '200', result: { filted: 829, isonl: 829 } }),
  makeSet({ name: 'multi-t-144', t: '202603,202602', o: '201', q: 'd', s: 'times', a: '0', l: 'true', result: { filted: 718, isonl: 718 } }),
  makeSet({ name: 'a-500', t: '202603,202602', o: '150,151', a: '500', result: { filted: 0, isonl: 0 } }),
  makeSet({ name: 'l-true', t: '202603,202602', o: '180', l: 'true', result: { filted: 0, isonl: 0 } }),
  makeSet({ name: 'q-d-times', t: '202603,202602', o: '340', q: 'd', s: 'times', result: { filted: 1, isonl: 1 } }),
  makeSet({ name: 'empty-e', t: '202603,202602', o: '404', e: '', result: { filted: 0, isonl: 0 } }),
  makeSet({ name: 'multi-o', t: '202603,202602', o: '120,121,122', s: 'sum', result: { filted: 0, isonl: 0 } }),
  makeSet({ name: 'a-zero', t: '202603,202602', o: '120', a: '0', result: { filted: 136, isonl: 136 } }),
  makeSet({ name: 'complex', t: '8,9', o: '160,161', e: '171,172', q: 'c', s: 'times', a: '250', l: 'true', result: { filted: 0, isonl: 0 } }),
  makeSet({ name: 'd-301-202602', t: '202602', o: '301', q: 'd', s: 'times', a: '100', l: 'true', result: { filted: 13, isonl: 13 } }),
]

module.exports = querySets
