import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'

const ItemCard = ({ id, name,content })=> (
  <Card
    key={id}
    image="/img/sampleImage.png"
    header={name}
    description={content || "Added content to the DB please"}
    href={`/item/${id}`}
    centered
  />
)


export default ItemCard;
