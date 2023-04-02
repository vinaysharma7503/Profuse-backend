const User = require("../../Modals/User");

exports.getUsersList=async(req,res,next)=>{
    try {
        const options={
            page:parseInt(req.query.page)||1,
            // limit:parseInt(req.query.limit)||10,
            collation:{
                locale:'en'
            },
            sort:{
                created_at:-1
            }
        }
        let query = [
            {
              '$match': {
                'role': 'User'
              }
            }
          ]
          let queryAggregate = User.aggregate(query);
        const users = await User.aggregatePaginate(queryAggregate,options);
        res.send({
            status:200,
            message:'Users List',
            data:{users}
        })
    } catch (error) {
        next(error)
    }
}