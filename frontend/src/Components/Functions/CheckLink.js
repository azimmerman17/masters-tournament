const CheckLink = (link) => {
  if (link.substring(0,4) === 'http') {
    return link
  } else {
    return 'https://www.masters.com' + link
  }
}

export default CheckLink 
