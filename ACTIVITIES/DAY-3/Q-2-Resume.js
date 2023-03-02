let Resume =
{
    "Name": "Subaash",
    "Email": "g.subaash04072002@gmail.com",
    "Phone": "9514474101",
    "Address":"23/1 ,subash Nagar,Pallipalayam,Erode,TamilNadu,zip,638008",
    
    "skills": 
    [
        "Programming languages: Java, C, JavaScript"
    ],
    "education":
     [
        {
            "degree": "Bachelor of Engineering in Electronics and Communication Engineering ",
            "Institution": "Karpagam College of Engineering, Coimbatore",
            "graduation_date": "May 2023"
        },

        {
            "degree": "HSC",
            "Institution": "SSM Lakshmi Ammal Matric Higher Secondary School,Namakkal",
            "graduation_date": "March 2019"
        },
        {
            "degree": "SSLC",
            "Institution": "SSM Lakshmi Ammal Matric Higher Secondary School,Namakkal",
            "graduation_date": "March 2017"
        },

    ],
    "PROJECT":
    [
        {
           "Simple Laser Security Device" :"This device alert the user by given buzzer sound when the laser light was interrupted.",
           "Range Finder":" Using Arduino and ultrasonic sensor. It shows accurate distance of the object."
        }
    ],
    "INTERNSHIP": 
    [
    "WEB APPLICATION PROGRAM at MVN Evolution (01/05/2021) - (30/05/2021)",
    " I learned the Introduction and basics of HTML5."
    ],

    "certifications":
     [
        {
            "name": "Introduction to HTML5",
            "date": "June 2021",
        }
        
    ],
    "SOFT SKILLS":
    [        
        {
             "*":"Good at leadership and administrative quality.",
             "*":"Good at Time Management and adaptable to any working conditions.",
             "*":"Active listener and Attentive learner."
        }
    ],


};
 
for (let [key, value] of Object.entries(Resume)) {
        console.log(`${key} : ${value}`);
}