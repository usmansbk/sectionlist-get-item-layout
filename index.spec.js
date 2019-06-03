const sectionListGetItemLayout = require('./lib').default

test('Empty sections', () => {
  const getItemLayout = sectionListGetItemLayout({
    getItemHeight: () => 2,
    getSeparatorHeight: () => 23,
    getSectionHeaderHeight: () => 41,
    getSectionFooterHeight: () => 61,
  })

  const data = [{ data: [] }, { data: [] }, { data: [null] }]

  expect(getItemLayout(data, 0)).toEqual({ length: 0, offset: 0, index: 0 })
  expect(getItemLayout(data, 1)).toEqual({ length: 0, offset: 0, index: 1 })
  expect(getItemLayout(data, 5)).toEqual({
    length: 61,
    offset: 0 + 41 + 61 + 41,
    index: 5,
  })
  expect(getItemLayout(data, 6)).toEqual({
    length: 41,
    offset: 0 * 41 + 61 + 41 + 61 + 41,
    index: 6,
  })
})

test('Multiple rows in one section', () => {
  const getItemLayout = sectionListGetItemLayout({
    getItemHeight: () => 2,
    getSeparatorHeight: () => 23,
    getSectionHeaderHeight: () => 41,
    getSectionFooterHeight: () => 61,
  })

  const data = [{ data: [null, null, null] }]

  expect(getItemLayout(data, 2)).toEqual({
    length: 41,
    offset: 0,
    index: 2,
  })
})

test('Calling sectionListGetItemLayout with only getItemHeight', () => {
  const getItemLayout = sectionListGetItemLayout({
    getItemHeight: () => 1,
  })

  const data = [{ data: [null, null] }]

  expect(getItemLayout(data, 0)).toEqual({ length: 0, offset: 0, index: 0 })
  expect(getItemLayout(data, 1)).toEqual({ length: 0, offset: 0, index: 1 })
  expect(getItemLayout(data, 2)).toEqual({ length: 0, offset: 0, index: 2 })
  expect(getItemLayout(data, 3)).toEqual({ length: 1, offset: 0, index: 3 })
})