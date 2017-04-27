const analyzeCommits = require('./')

describe('semantic-release-always-release-as-x', () => {
  it('accepts the release type as configuration', () => {
    analyzeCommits({type: 'minor'}, {}, (err, type) => {
      expect(err).toBe(null)
      expect(type).toBe('minor')
    })
  })

  it('throws an error if the type is not a supported type', () => {
    analyzeCommits({type: 'taylor swift'}, {}, (err, type) => {
      expect(err.message).toBe('Unsupported type: taylor swift')
    })
  })
})
