define({ "api": [
  {
    "version": "1.0.0",
    "type": "post",
    "url": "http://www.drupal_test.com/api/v1/drupal_test/forgetpassword",
    "title": "Forget password  API - POST",
    "description": "<p>Scenario: During forgetpassword</p> <p>Screen : NA</p> <p>API Function:This api update password and send pwd for used email id.</p>",
    "name": "User_forgetpassword_post",
    "group": "Forget_password",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "userreg.email",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "data": [
          {
            "group": "data",
            "type": "string",
            "optional": false,
            "field": "userreg.rid",
            "description": "<p>User Id</p>"
          }
        ]
      }
    },
    "filename": "./friends.php",
    "groupTitle": "Forget_password"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "http://www.drupal_test.com/api/v1/drupal_test/usergroup",
    "title": "Create Group  API - POST",
    "description": "<p>Scenario: During group</p> <p>Screen : NA</p> <p>API Function:This api create user group.</p>",
    "name": "User_group_post",
    "group": "User_Group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "userreg.rid",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userreg.g_name",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "Success",
            "description": "<p>true means success, false means fail result</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>Record Created if success</p>"
          }
        ],
        "data": [
          {
            "group": "data",
            "type": "string",
            "optional": false,
            "field": "userreg.rid",
            "description": "<p>User Id</p>"
          }
        ]
      }
    },
    "filename": "./friends.php",
    "groupTitle": "User_Group"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "http://www.drupal_test.com/api/v1/drupal_test/groupjoin",
    "title": "Add member to a  Group  API - POST",
    "description": "<p>Scenario: During group</p> <p>Screen : NA</p> <p>API Function:This api create user group.</p>",
    "name": "User_group_post",
    "group": "User_Group_Join",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "userreg.g_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userreg.rid",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "Success",
            "description": "<p>true means success, false means fail result</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>Record Created if success</p>"
          }
        ],
        "data": [
          {
            "group": "data",
            "type": "string",
            "optional": false,
            "field": "userreg.gm_id",
            "description": "<p>Group Member Id</p>"
          },
          {
            "group": "data",
            "type": "string",
            "optional": false,
            "field": "userreg.g_id",
            "description": "<p>Group ID</p>"
          },
          {
            "group": "data",
            "type": "string",
            "optional": false,
            "field": "userreg.rid",
            "description": "<p>User Id</p>"
          }
        ]
      }
    },
    "filename": "./friends.php",
    "groupTitle": "User_Group_Join"
  },
  {
    "version": "1.0.0",
    "type": "get",
    "url": "http://www.drupal_test.com/api/v1/drupal_test/groupList",
    "title": "User Group lists - Get",
    "description": "<p>Scenario: NA</p> <p>Screen : NA</p> <p>API Function:This api fetch groups's records.</p>",
    "name": "groupList___GET",
    "group": "User_Group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "userReg.rid",
            "description": "<p>rid</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "Success",
            "description": "<p>true means success, false means fail result</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Record(s) Found if success</p>"
          }
        ],
        "data": [
          {
            "group": "data",
            "type": "int",
            "optional": false,
            "field": "userReg.gm_id",
            "description": "<p>gm_id</p>"
          },
          {
            "group": "data",
            "type": "string",
            "optional": false,
            "field": "userreg.rid",
            "description": "<p>rid</p>"
          },
          {
            "group": "data",
            "type": "string",
            "optional": false,
            "field": "userreg.g_id",
            "description": "<p>g_id</p>"
          },
          {
            "group": "data",
            "type": "string",
            "optional": false,
            "field": "userreg.is_admin",
            "description": "<p>is_admin 0/1</p>"
          },
          {
            "group": "data",
            "type": "timestamp",
            "optional": false,
            "field": "userreg.created",
            "description": "<p>created created time</p>"
          },
          {
            "group": "data",
            "type": "timestamp",
            "optional": false,
            "field": "userreg.updated",
            "description": "<p>updated Updated time</p>"
          },
          {
            "group": "data",
            "type": "char",
            "optional": false,
            "field": "userreg.updated_by",
            "description": "<p>updated by User ID</p>"
          },
          {
            "group": "data",
            "type": "int",
            "optional": false,
            "field": "userreg.deleted",
            "description": "<p>deleted deleted 0 = no 1 = yes</p>"
          }
        ]
      }
    },
    "filename": "./friends.php",
    "groupTitle": "User_Group"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "http://www.drupal_test.com/api/v1/drupal_test/userlogin",
    "title": "User  Login API - POST",
    "description": "<p>Scenario: During User Login</p> <p>Screen : NA</p> <p>API Function:This api Login user record.</p>",
    "name": "User_Login_post",
    "group": "User_Login",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userreg.user_name",
            "description": "<p>username</p>"
          },
          {
            "group": "Parameter",
            "type": "smallint",
            "optional": false,
            "field": "userreg.password",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "Success",
            "description": "<p>true means success, false means fail result</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>Record Created if success</p>"
          }
        ],
        "data": [
          {
            "group": "data",
            "type": "string",
            "optional": false,
            "field": "userreg.rid",
            "description": "<p>login id</p>"
          },
          {
            "group": "data",
            "type": "string",
            "optional": false,
            "field": "userreg.l_id",
            "description": "<p>User Id</p>"
          }
        ]
      }
    },
    "filename": "./friends.php",
    "groupTitle": "User_Login"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "http://www.drupal_test.com/api/v1/drupal_test/userlogout",
    "title": "User  logout API - POST",
    "description": "<p>Scenario: During User log out</p> <p>Screen : NA</p> <p>API Function:This api create user record.</p>",
    "name": "User_logout_post",
    "group": "User_Logout",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userreg.rid",
            "description": "<p>username</p>"
          },
          {
            "group": "Parameter",
            "type": "smallint",
            "optional": false,
            "field": "userreg.l_id",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "Success",
            "description": "<p>true means success, false means fail result</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>Record Created if success</p>"
          }
        ],
        "data": [
          {
            "group": "data",
            "type": "string",
            "optional": false,
            "field": "userreg.rid",
            "description": "<p>login id</p>"
          },
          {
            "group": "data",
            "type": "string",
            "optional": false,
            "field": "userreg.l_id",
            "description": "<p>User Id</p>"
          }
        ]
      }
    },
    "filename": "./friends.php",
    "groupTitle": "User_Logout"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "http://www.drupal_test.com/api/v1/drupal_test/profileupdated",
    "title": "Profile Updated  API - POST",
    "description": "<p>Scenario: During Updated profiles</p> <p>Screen : NA</p> <p>API Function:This api Update a profile info</p>",
    "name": "User_Profile_Update_post",
    "group": "User_Profile_Update",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userreg.f_name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "smallint",
            "optional": false,
            "field": "userreg.l_name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userreg.email",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "Success",
            "description": "<p>true means success, false means fail result</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>Record Created if success</p>"
          }
        ],
        "data": [
          {
            "group": "data",
            "type": "string",
            "optional": false,
            "field": "userreg.rid",
            "description": "<p>User Id</p>"
          }
        ]
      }
    },
    "filename": "./friends.php",
    "groupTitle": "User_Profile_Update"
  },
  {
    "version": "1.0.0",
    "type": "get",
    "url": "http://www.drupal_test.com/api/v1/drupal_test/registrationlist",
    "title": "User  Regestarion API - Get",
    "description": "<p>Scenario: NA</p> <p>Screen : NA</p> <p>API Function:This api fetch user's records.</p>",
    "name": "User_Registration___GET",
    "group": "User_Registration",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "userReg.rid",
            "description": "<p>User rid</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "Success",
            "description": "<p>true means success, false means fail result</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Record(s) Found if success</p>"
          }
        ],
        "data": [
          {
            "group": "data",
            "type": "int",
            "optional": false,
            "field": "userReg.rid",
            "description": "<p>User uid</p>"
          },
          {
            "group": "data",
            "type": "string",
            "optional": false,
            "field": "userreg.f_name",
            "description": "<p>First Name</p>"
          },
          {
            "group": "data",
            "type": "string",
            "optional": false,
            "field": "userreg.l_name",
            "description": "<p>Last Name</p>"
          },
          {
            "group": "data",
            "type": "string",
            "optional": false,
            "field": "userreg.email",
            "description": "<p>Comes from the email.</p>"
          },
          {
            "group": "data",
            "type": "string",
            "optional": false,
            "field": "userreg.password",
            "description": "<p>Password</p>"
          },
          {
            "group": "data",
            "type": "timestamp",
            "optional": false,
            "field": "userreg.created",
            "description": "<p>created created time</p>"
          },
          {
            "group": "data",
            "type": "timestamp",
            "optional": false,
            "field": "userreg.updated",
            "description": "<p>updated Updated time</p>"
          },
          {
            "group": "data",
            "type": "char",
            "optional": false,
            "field": "userreg.updated_by",
            "description": "<p>updated by User ID</p>"
          },
          {
            "group": "data",
            "type": "int",
            "optional": false,
            "field": "userreg.deleted",
            "description": "<p>deleted deleted 0 = no 1 = yes</p>"
          }
        ]
      }
    },
    "filename": "./friends.php",
    "groupTitle": "User_Registration"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "http://www.drupal_test.com/api/v1/drupal_test/groupJoin",
    "title": "Create members on groups API - POST",
    "description": "<p>Scenario: During create group members</p> <p>Screen : NA</p> <p>API Function:This api create user record.</p>",
    "name": "User_Registration_post",
    "group": "User_Registration",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userreg.rid",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "smallint",
            "optional": false,
            "field": "userreg.g_id",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "Success",
            "description": "<p>true means success, false means fail result</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>Record Created if success</p>"
          }
        ],
        "data": [
          {
            "group": "data",
            "type": "string",
            "optional": false,
            "field": "userreg.id",
            "description": "<p>id</p>"
          },
          {
            "group": "data",
            "type": "string",
            "optional": false,
            "field": "userreg.rid",
            "description": "<p>User Id</p>"
          },
          {
            "group": "data",
            "type": "string",
            "optional": false,
            "field": "userreg.g_id",
            "description": "<p>Group Id</p>"
          }
        ]
      }
    },
    "filename": "./friends.php",
    "groupTitle": "User_Registration"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "http://www.drupal_test.com/api/v1/drupal_test/userregister",
    "title": "User  Regestarion API - POST",
    "description": "<p>Scenario: During User Registration</p> <p>Screen : NA</p> <p>API Function:This api create user record.</p>",
    "name": "User_Registration_post",
    "group": "User_Registration",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userreg.f_name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "smallint",
            "optional": false,
            "field": "userreg.l_name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userreg.email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userreg.password",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "Success",
            "description": "<p>true means success, false means fail result</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>Record Created if success</p>"
          }
        ],
        "data": [
          {
            "group": "data",
            "type": "string",
            "optional": false,
            "field": "userreg.rid",
            "description": "<p>User Id</p>"
          }
        ]
      }
    },
    "filename": "./friends.php",
    "groupTitle": "User_Registration"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./main.js",
    "group": "_var_www_html_friends_api_main_js",
    "groupTitle": "_var_www_html_friends_api_main_js",
    "name": ""
  }
] });
