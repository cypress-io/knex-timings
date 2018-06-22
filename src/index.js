const chalk = require('chalk')

const dates = {}

const cleanup = (id) => {
  delete dates[id]
}

function knexTimings (knex) {
  knex.on('query', (data) => {
    // hold a reference to the current date
    // when the query has started
    dates[data.__knexQueryUid] = new Date()
  })

  knex.on('query-error', (err, data) => {
    // on query error just nuke this out ofof dates
    cleanup(data.__knexQueryUid)
  })

  knex.on('query-response', (response, data) => {
    const date = dates[data.__knexQueryUid]
    if (!date) {
      return
    }
    // lookup the color to use by SQL method
    // or just use the 'other' color
    // color codes
    const colors = {
      select: 'blue',
      update: 'yellow',
      insert: 'green',
      delete: 'red',
      other: 'magenta',
      time: 'gray'
    }

    const color = colors[data.method] || colors.other

    // total time the query took
    const total = new Date() - date

    const time = chalk[colors.time](`  - (${total}ms) `)
    const msg = chalk[color](data.sql)

    console.log(time, '{', msg, '}', data.bindings, '\n')

    cleanup(data.__knexQueryUid)
  })
}

module.exports = knexTimings
