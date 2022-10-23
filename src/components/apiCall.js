import axios from 'axios'

export default async function getCardByName(cardName){
    
    try{
        
        let encodedCardName = encodeURIComponent(cardName)
        let res = await axios.get(`https://api.scryfall.com/cards/named?exact=${encodedCardName}`)
        
        let cardData = new Object()
        cardData.name = res.data.name
        cardData.manaCost = res.data.mana_cost
        cardData.color = res.data.colors
        cardData.oracleText = res.data.oracle_text
           
        return cardData
        
    }catch(err){
        throw err
    }
}
