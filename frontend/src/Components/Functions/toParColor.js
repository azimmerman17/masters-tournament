const toParColor = (score) => {
  console.log(score)
  if (score < 0) {
    return 'red'
  } else if (score > 0) {
    return 'black'
  } else {
    return 'green'
  }
}

export default toParColor