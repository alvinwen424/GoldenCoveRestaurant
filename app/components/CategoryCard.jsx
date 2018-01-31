import React from 'react'
import { Card } from 'semantic-ui-react'

const CategoryCard = ({ id, name, content })=> (
  <Card
    key={id}
    image="/img/sampleImage.png"
    header={name}
    description={content || "Added content to the DB please"}
    href={`/category/${id}`}
    centered
  />
)


export default CategoryCard;
