const axios = require('axios')

export async function getCardByName(cardName){
    
    try{
        
        let encodedCardName = encodeURIComponent(cardName)
        let res = await axios.get(`https://api.scryfall.com/cards/named?exact=${encodedCardName}`)
        
        let cardData = new Object()
        cardData.name = res.name
        cardData.manaCost = res.mana_cost
        cardData.color = res.colors
        cardData.oracleText = res.oracle_text
        console.log(cardData)
           
        return cardData
        
    }catch(err){
        throw err
    }
}