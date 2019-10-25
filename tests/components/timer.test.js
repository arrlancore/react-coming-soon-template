import React from 'react'
import renderer from 'react-test-renderer'
import Timer from '../../src/components/timer'

describe('Timer', () => {
  const originalDate = global.Date
  const time = '00:00'
  const startDate = new Date('2020-01-01')
  const countDownTo = new Date('2020-01-02')

  afterEach(() => {
    global.Date = originalDate
  })

  it('renders correctly for a countdown to a date 1 day in the future', () => {
    global.Date = jest.fn(args => (args ? countDownTo : startDate))
    global.Date.parse = originalDate.parse.bind(originalDate)
    const tree = renderer
      .create(<Timer time={time} date={countDownTo.toISOString()} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly for a date in the past', () => {
    global.Date = jest.fn(args => (args ? startDate : countDownTo))
    global.Date.parse = originalDate.parse.bind(originalDate)
    const tree = renderer
      .create(<Timer time={time} date={startDate.toISOString()} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
