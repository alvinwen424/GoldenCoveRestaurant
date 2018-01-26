import React from 'react'
import { Card } from 'semantic-ui-react'

const CategoryCard = ({ id, name })=> (
  <Card
    key={id}
    image="/img/sampleImage.png"
    header={name}
    description="Added content to the DB please"
    href={`/SingleCategory/${id}`}
    centered
  />
)


export default CategoryCard;
