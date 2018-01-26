import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'

const ItemCard = ({ id, name })=> (
  <Card
    key={id}
    image="/img/sampleImage.png"
    header={name}
    description="Added content to the DB please"
    href={`/SingleItem/${id}`}
    centered
  />
)


export default ItemCard;
