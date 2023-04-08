import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from 'react-bootstrap/Button'

const Articles = ({ news }) => {
  const { active, content } = news
  const { items } = content

  const showNews = items.map(article => {
    const { description, images, title, shareUrl, cmsId } = article
    const { medium } = images[0]
    return (
      <Col key={cmsId} className='col-6'>
        <Button href={shareUrl} target='_blank' className='border m-1 p-2'>
          <img className='p-1 m-1' style={{width: '100%'}} src={medium} alt={description} />
          <h6 className='p-1 m-1'>{title}</h6>
        </Button>
      </Col>

    )
  })

  if (active === true) {
    return (
      <div className='m-a'>
        <h4>Latest News</h4>
        <Row className='p-1 m-1'>
          {showNews}
        </Row>
      </div>
    )
  }
}

export default Articles