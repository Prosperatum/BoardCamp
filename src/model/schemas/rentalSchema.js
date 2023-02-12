import joi from "joi";

export const rentalSchema = joi.object({
    customerId: joi.number().required(),
    gameId: joi.number().required(),
    daysRented: joi.number().min(1).required(),
  })


//   id:
//   customerId:
//   gameId:
//   rentDate:  
//   daysRented: 
//   returnDate:         
//   originalPrice:         
//   delayFee: