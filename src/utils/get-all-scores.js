import {groupBy, prop, sum} from 'ramda'

function getAllScores(answer) {
  const results = groupBy(prop('profile'), answer.flat())

  const scores = Object.keys(results).reduce((newObj, key) => {
    newObj[key] = sum(results[key].map((answer) => answer.points))

    return newObj
  }, {})

  return scores
}

export default getAllScores
