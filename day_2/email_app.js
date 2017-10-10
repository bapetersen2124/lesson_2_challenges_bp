var mailApp = {
  name : 'G-Mail',
  mailboxes : {
    main : [
      {
        from: "theSkimm",
        attachment: false,
        date: "2017-10-10",
        subject_line: "Daily Skimm: One eye open"
       },

      {
        from: "Christopher Johnson",
        attachment: true,
        date: "2017-10-09",
        subject_line: "My Files"
      },

      {
        from: "PSNC Customer Service",
        attachment: false,
        date: "2017-10-06",
        subject_line: "Your PSNC Energy Bill is Available"
      },

      {
        from: "Caitlinn LaScala",
        attachment: true,
        date: "2017-10-06",
        subject_line: "Week One is Done!"
      }
    ],

   starred : [
    {
      from: "Girl Develop It RDU",
      attachment: false,
      date: "2017-09-25",
      subject_line: "2 Meetups Tomorrow"
    },

    {
      from: "Keith Petersen",
      attachment: false,
      date: "2013-08-30",
      subject_line: "Karl Services"
    },

    {
      from: "Anyuan Wang",
      attachment: true,
      date: "2010-10-25",
      subject_line: "Offer of Admission, Brooke Petersen, 2626752"
    }
  ],

    important : [
    {
      from: "Ellen Petersen",
      attachment: false,
      date: "2017-10-05",
      subject_line: "FWD: Delivery Confirm for Order LC1830101513"
    },

    {
      from: "Keith Petersen",
      attachment: false,
      date: "2017-10-05",
      subject_line: "Proud Husband"
    },

    {
      from: "Chris Stout",
      attachment: false,
      date: "2017-10-03",
      subject_line: "Client of Ellen Interviewing in Durham"
    }
  ],

    drafts : [
    {
      from: "Brooke Petersen",
      to: "Patricia Michaels",
      attachment: false,
      date: "2017-09-24",
      subject_line: "Tree Work"
    }
  ],

   sent : [
   {
     from: "Brooke Petersen",
     to: "Christopher Johnson",
     attachment: true,
     date: "2017-10-09",
     subject_line: "My Files"
   },

   {
      from: "Brooke Petersen",
      to: "lolive@techtalentsouth.com",
      attachment: false,
      date: "2017-10-03",
      subject_line: "Brooke Petersen GitHub Name"
    },

    {
      from: "Brooke Petersen",
      to: "Ellen Petersen",
      attachment: false,
      date: "2017-09-30",
      subject_line: "Two Black Handbags You Might Like"
    }
  ]
 },

calendar : [
    {
    appointment_name : "Mazda State Inspection",
    date : "2017-10-13",
    appointment_time : "10:45:00"
  },

    {
      holiday_name : "Columbus Day",
      date: "2017-10-09"
  },

    {
      task_name : "Pick Up Dry Cleaning",
      date : "2017-10-11",
    }
],

chat : [
    {
      name : "Christopher Johnson",
      email_address : "chrej791@gmail.com",
      date_last_message : "2017-10-10"
    },

    {
      name : "Jana Petersen",
      email_address : "jana.petersen87@gmail.com",
      date_last_message : "2017-10-06"
    },

    {
      name : "Marshall Madow",
      email_address : "mcm220@gmail.com",
      date_last_message : "2017-10-03"
    }
]
};

// Get a list of inbox names
for (var i = 0; i < mailApp.mailboxes.main.length; i ++) {
  console.log(mailApp.mailboxes.main[i].from);
}

// Get the "From" name from the first email in your main inbox
console.log(mailApp.mailboxes.main[0].from);

// Get a list of emails from chat contacts
for (var i = 0; i < mailApp.chat.length; i++){
  console.log(mailApp.chat[i].email_address);
}

// Get the subject line of the second email in the visible list
console.log(mailApp.mailboxes.main[1].subject_line);

// Get the "name" of every event in my calendar
for (var i = 0; i < mailApp.calendar.length; i++){
  console.log(mailApp.calendar[i].date);
}

// Add a draft email to the drafts mailbox
mailApp.mailboxes.drafts.push({from: "Brooke Petersen", to: "Jana Petersen", attachment: false, date: "2017-10-10", subject_line: "Congratulations!"});

// Verification of the above
console.log(mailApp.mailboxes.drafts[1]);
