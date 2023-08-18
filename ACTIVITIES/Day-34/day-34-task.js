
// 1.Find all the topics and tasks which are thought in the month of October
db.topics.aggregate([ { $lookup: { from: "tasks", localField: "topic_id", foreignField: "topic_id", as: "tasks" } }, { $match: { "tasks.due_date": { $gte: "2020-10-01", $lte: "2020-10-31" } } }] );

//2. Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
db.company_drives.find(   {date:{$gte:"2020-10-15" , $lte:"2020-10-31"}});

//3. Find all the company drives and students who are appeared for the placement.
db.company_drives.aggregate([{$lookup: {from: "attendance",let: { driveId: "$drive_id" },pipeline: [{$match: {$expr: { $eq: ["$attendance_id", "$$driveId"] },present: true}},{$lookup: {from: "users",localField: "user_id",foreignField: "user_id",as: "student"}},{ $unwind: "$student" }],as: "placement_students"}}]);

//4. Find the number of problems solved by the user in codekata
db.attendance.aggregate([ { $match: { present: true }  }, { $group: { _id: "$user_id", problemsSolved: { $sum: 1 }  } }] );

//5. Find all the mentors with who has the mentee's count more than 15
db.mentors.aggregate([{$lookup: {from: "users",localField: "mentor_id",foreignField: "mentor_id",as: "mentees"}},{$addFields: {menteeCount: { $size: "$mentees" }}},{$match: {menteeCount: { $gt: 15 }}}]);

//6. Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
db.attendance.aggregate([{$match: {date: { $gte: "2020-10-15", $lte: "2020-10-31" },present: false}},{$lookup: {from: "tasks",localField: "user_id",foreignField: "user_id",as: "tasks"}},{$match: {"tasks": { $size: 0 }}},{$group: {_id: "$user_id",count: { $sum: 1 }}}]);