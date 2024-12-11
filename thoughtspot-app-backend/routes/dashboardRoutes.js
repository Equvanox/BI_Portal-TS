// const express = require('express');
// const apiService = require('../service');
// const router = express.Router();

// const echart_query = 'SELECT * FROM DEMO_DB.PUBLIC."DQF-TC_TRANSACTION_OMG" LIMIT 20;';
// const aggrid_query = 'SELECT * FROM DEMO_DB.PUBLIC."DQF-TC_TRANSACTION_LN" LIMIT 10 OFFSET 20;'

// router.get('/api/snowflake-echart-dashboard', async (req, res) => {
//     try {
//         const data = await apiService.querySnowflake(echart_query);
//         // console.log(data);
//         var temp = Array();
//         for (let i=0; i<data.length; i++) {
//             temp.push({"category":data[i]['ZIPCODE'], "value": data[i]['IMP_IM']});
//         }
//         res.json(temp);
//     } catch (error) {
//         console.log("Error querying Snowflake:", error);
//         res.status(500).send("Error retrieving data from Snowflake");
//     }
// });

// router.get('/api/snowflake-aggrid-dashboard', async (req, res) => {
//     try {
//         const data = await apiService.querySnowflake(aggrid_query);
//         // console.log(data);
//         var temp = Array()
//         for (let i=0; i<data.length; i++) {
//             temp.push({            
//                 "TRANSACTION_DATE": data[i]["TRANSACTION_DATE"],
//                 "RFPID": data[i]["RFPID"],
//                 "CREATIVE_ID": data[i]["CREATIVE_ID"],
//                 "ADVERTISER_NAME": data[i]["ADVERTISER_NAME"],
//                 "ZIPCODE": data[i]["ZIPCODE"],
//                 "DMA": data[i]["DMA"],
//                 "STATE_CODE": data[i]["STATE_CODE"],
//                 "IMP_IM": data[i]["IMP_IM"],
//                 "IMP_Q1": data[i]["IMP_Q1"],
//                 "IMP_Q2": data[i]["IMP_Q2"],
//                 "IMP_Q3": data[i]["IMP_Q3"],
//                 "IMP_Q4": data[i]["IMP_Q4"],
//                 "START_DATE": data[i]["START_DATE"],
//                 "END_DATE": data[i]["END_DATE"],
//                 "BOOKED_IMPRESSIONS": parseFloat(data[i]["BOOKED_IMPRESSIONS"]),
//                 "SEGMENT_NAME": data[i]["SEGMENT_NAME"]
//             })
//         } 
//         res.json(temp);
//     } catch (error) {
//         console.log("Error querying Snowflake:", error);
//         res.status(500).send("Error retrieving data from Snowflake");
//     }
// });

// module.exports = router;
