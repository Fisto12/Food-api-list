import foodModel from '../model/food.js';

export const createFood = async(req,res)=> {
      const food = req.body;
          const foodie =  new foodModel({
               ...food,
                createdAt: new Date().toISOString()
            })
      try {
        await foodie.save()
        return res.status(200).json(foodie );
      } catch (error) {
         return res.status(404).json({ message:'unable to populate to db' });
      }
}
export const getFoodByTribe = async(req,res)=>{
      let foodCat = req.params.cat
      let food;
      try {
           food = await foodModel.find({category:foodCat}) 
           return res.json({food})
      } catch (error) {
            
      }
}
