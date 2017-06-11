/**
 * Created by sriramk on 4/18/17.
 */
module.exports = {
    getRandomNumber: function(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
}

// if(tipType === 'alltips') {
//     grangeRepository.getAllTips(function(err, data) {
//         if(err) {
//             callback(err);
//         } else {
//             console.log("Get ALL tips");
//             console.log(JSON.stringify(data));
//             callback(null, data);
//         }
//     });
// } else if(tipType === 'autotips') {
//     grangeRepository.getAutoTips(function(err, data) {
//         if(err) {
//             callback(err);
//         } else {
//             console.log("Get AUTO tips");
//             console.log(JSON.stringify(data));
//             callback(null, data);
//         }
//     });
// } else if(tipType === 'hometips') {
//     grangeRepository.getHomeTips(function(err, data) {
//         if(err) {
//             callback(err);
//         } else {
//             console.log("Get HOME tips");
//             console.log(JSON.stringify(data));
//             callback(null, data);
//         }
//     });
// } else if(tipType === 'businesstips') {
//     grangeRepository.getBusinessTips(function(err, data) {
//         if(err) {
//             callback(err);
//         } else {
//             console.log("Get BUSINESS tips");
//             console.log(JSON.stringify(data));
//             callback(null, data);
//         }
//     });
// } else if(tipType === 'lifetips') {
//     grangeRepository.getLifeTips(function(err, data) {
//         if(err) {
//             callback(err);
//         } else {
//             console.log("Get LIFE tips");
//             console.log(JSON.stringify(data));
//             callback(null, data);
//         }
//     });
// } else if(tipType === 'generaltips') {
//     grangeRepository.getGeneralTips(function(err, data) {
//         if(err) {
//             callback(err);
//         } else {
//             console.log("Get GENERAL tips");
//             console.log(JSON.stringify(data));
//             callback(null, data);
//         }
//     });
// } else {
//     grangeRepository.listAllBuckets(function(err, data) {
//       if(err) {
//         callback(err);
//       } else {
//         console.log("List All BUCKETS");
//         console.log(JSON.stringify(data));
//         callback(null, data);
//       }
//     });
// }