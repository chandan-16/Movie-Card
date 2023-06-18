import React from 'react'
import MainCard from './MainCard'
import { cardDeatail } from './CardDetail'

export default function CardList() {
  return (
    <div style={{display : 'flex', justifyContent : 'center', margin : '0px 6px'}}>
    <div>
         <MainCard image = {cardDeatail[0].image} name = {cardDeatail[0].name} generes = {cardDeatail[0].generes} summary = {cardDeatail[0].summary} detail = {cardDeatail[0].details} crew = {cardDeatail[0].crew} link = {cardDeatail[0].link} link2 = {cardDeatail[0].link2}/>
    </div>
     
    <div>
         <MainCard image = {cardDeatail[1].image} name = {cardDeatail[1].name} generes = {cardDeatail[1].generes} summary = {cardDeatail[1].summary} detail = {cardDeatail[1].details} crew = {cardDeatail[1].crew} link = {cardDeatail[1].link} link2 = {cardDeatail[0].link2}/>
    </div>
    
    <div>
        <MainCard image = {cardDeatail[2].image} name = {cardDeatail[2].name} generes = {cardDeatail[2].generes} summary = {cardDeatail[2].summary} detail = {cardDeatail[2].details} crew = {cardDeatail[2].crew} link = {cardDeatail[2].link} link2 = {cardDeatail[2].link2}/>
    </div>
    
    <div>
        <MainCard image = {cardDeatail[3].image} name = {cardDeatail[3].name} generes = {cardDeatail[3].generes} summary = {cardDeatail[3].summary} detail = {cardDeatail[3].details} crew = {cardDeatail[3].crew} link = {cardDeatail[3].link} link2 = {cardDeatail[3].link2}/>
    </div>
    
    <div>
         <MainCard image = {cardDeatail[4].image} name = {cardDeatail[4].name} generes = {cardDeatail[4].generes} summary = {cardDeatail[4].summary} detail = {cardDeatail[4].details} crew = {cardDeatail[4].crew} link = {cardDeatail[4].link} link2 = {cardDeatail[4].link2}/>
    </div>
    
    <div>
        <MainCard image = {cardDeatail[5].image} name = {cardDeatail[5].name} generes = {cardDeatail[5].generes} summary = {cardDeatail[5].summary} detail = {cardDeatail[5].details} crew = {cardDeatail[5].crew} link = {cardDeatail[5].link} link2 = {cardDeatail[5].link2}/>
    </div>

    </div>
  )
}
