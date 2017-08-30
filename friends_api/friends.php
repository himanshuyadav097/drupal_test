<?php
/**
* @apiVersion 1.0.0
* @api {post} http://www.drupal_test.com/api/v1/drupal_test/userregister  User  Regestarion API - POST
* @apiDescription 
* 
* Scenario: During User Registration
*  
* Screen : NA
* 
* API Function:This api create user record.  
* 
* @apiName User Registration post
* @apiGroup User Registration 
*
* @apiParam  {string} userreg.f_name
* @apiParam  {smallint} userreg.l_name
* @apiParam  {string} userreg.email
* @apiParam  {string} userreg.password
* 
* @apiSuccess {string} Success true means success, false means fail result
* @apiSuccess {string} message Record Created if success 
* 
* @apiSuccess  (data) {string} userreg.rid User Id
* 
* 
*/ 

/**
* @apiVersion 1.0.0
* @api {post} http://www.drupal_test.com/api/v1/drupal_test/userlogin  User  Login API - POST
* @apiDescription 
* 
* Scenario: During User Login
*  
* Screen : NA
* 
* API Function:This api Login user record.  
* 
* @apiName User Login post
* @apiGroup User Login 
*
* @apiParam  {string} userreg.user_name username
* @apiParam  {smallint} userreg.password
* 
* @apiSuccess {string} Success true means success, false means fail result
* @apiSuccess {string} message Record Created if success 
* 
* @apiSuccess  (data) {string} userreg.rid login id
* @apiSuccess  (data) {string} userreg.l_id User Id
* 
* 
*/ 
/**
* @apiVersion 1.0.0
* @api {post} http://www.drupal_test.com/api/v1/drupal_test/userlogout  User  logout API - POST
* @apiDescription 
* 
* Scenario: During User log out
*  
* Screen : NA
* 
* API Function:This api create user record.  
* 
* @apiName User logout post
* @apiGroup User Logout 
*
* @apiParam  {string} userreg.rid username
* @apiParam  {smallint} userreg.l_id
* 
* @apiSuccess {string} Success true means success, false means fail result
* @apiSuccess {string} message Record Created if success 
* 
* @apiSuccess  (data) {string} userreg.rid login id
* @apiSuccess  (data) {string} userreg.l_id User Id
* 
* 
*/ 


/**
 * @apiVersion 1.0.0
 * @api {get} http://www.drupal_test.com/api/v1/drupal_test/registrationlist  User  Regestarion API - Get
 * @apiDescription
 * 
 * Scenario: NA
 *
 * Screen : NA
 *
 * API Function:This api fetch user's records.
 *
 * @apiName User Registration - GET
 * @apiGroup User Registration
 *
 * @apiParam  {int} userReg.rid User rid
 *
 * @apiSuccess {string} Success true means success, false means fail result
 * @apiSuccess {String} message Record(s) Found if success
 *
 * @apiSuccess (data) {int} userReg.rid User uid
 * @apiSuccess  (data) {string} userreg.f_name First Name
 * @apiSuccess  (data) {string} userreg.l_name Last Name
 * @apiSuccess  (data) {string} userreg.email Comes from the email.
 * @apiSuccess  (data) {string} userreg.password Password
 * @apiSuccess  (data) {timestamp} userreg.created created created time
 * @apiSuccess  (data) {timestamp} userreg.updated updated Updated time
 * @apiSuccess  (data) {char} userreg.updated_by updated by User ID
 * @apiSuccess  (data) {int} userreg.deleted deleted deleted 0 = no 1 = yes
 * 
 *
 */

/**
* @apiVersion 1.0.0
* @api {post} http://www.drupal_test.com/api/v1/drupal_test/usergroup Create Group  API - POST
* @apiDescription 
* 
* Scenario: During group
*  
* Screen : NA
* 
* API Function:This api create user group.  
* 
* @apiName User group post
* @apiGroup User Group 
*
* @apiParam  {int} userreg.rid
* @apiParam  {string} userreg.g_name
*
* @apiSuccess {string} Success true means success, false means fail result
* @apiSuccess {string} message Record Created if success 
* 
* @apiSuccess  (data) {string} userreg.rid User Id
* 
* 
*/ 

/**
* @apiVersion 1.0.0
* @api {post} http://www.drupal_test.com/api/v1/drupal_test/groupjoin Add member to a  Group  API - POST
* @apiDescription 
* 
* Scenario: During group
*  
* Screen : NA
* 
* API Function:This api create user group.  
* 
* @apiName User group post
* @apiGroup User Group Join
*
* @apiParam  {int} userreg.g_id
* @apiParam  {string} userreg.rid
*
* @apiSuccess {string} Success true means success, false means fail result
* @apiSuccess {string} message Record Created if success 
* 
* @apiSuccess  (data) {string} userreg.gm_id Group Member Id
* @apiSuccess  (data) {string} userreg.g_id Group ID
* @apiSuccess  (data) {string} userreg.rid User Id
* 
* 
*/ 


/**
* @apiVersion 1.0.0
* @api {post} http://www.drupal_test.com/api/v1/drupal_test/forgetpassword Forget password  API - POST
* @apiDescription 
* 
* Scenario: During forgetpassword
*  
* Screen : NA
* 
* API Function:This api update password and send pwd for used email id.  
* 
* @apiName User forgetpassword post
* @apiGroup Forget password
*
* @apiParam  {int} userreg.email
* 
* @apiSuccess  (data) {string} userreg.rid User Id
* 
*/ 


/**
 * @apiVersion 1.0.0
 * @api {get} http://www.drupal_test.com/api/v1/drupal_test/groupList  User Group lists - Get
 * @apiDescription
 * 
 * Scenario: NA
 *
 * Screen : NA
 *
 * API Function:This api fetch groups's records.
 *
 * @apiName groupList  - GET
 * @apiGroup User Group
 *
 * @apiParam  {int} userReg.rid rid
 *
 * @apiSuccess {string} Success true means success, false means fail result
 * @apiSuccess {String} message Record(s) Found if success
 *
 * @apiSuccess (data) {int} userReg.gm_id gm_id
 * @apiSuccess  (data) {string} userreg.rid rid
 * @apiSuccess  (data) {string} userreg.g_id g_id
 * @apiSuccess  (data) {string} userreg.is_admin is_admin 0/1
 * @apiSuccess  (data) {timestamp} userreg.created created created time
 * @apiSuccess  (data) {timestamp} userreg.updated updated Updated time
 * @apiSuccess  (data) {char} userreg.updated_by updated by User ID
 * @apiSuccess  (data) {int} userreg.deleted deleted deleted 0 = no 1 = yes
 * 
 *
 */

/**
* @apiVersion 1.0.0
* @api {post} http://www.drupal_test.com/api/v1/drupal_test/groupJoin  Create members on groups API - POST
* @apiDescription 
* 
* Scenario: During create group members
*  
* Screen : NA
* 
* API Function:This api create user record.  
* 
* @apiName User Registration post
* @apiGroup User Registration 
*
* @apiParam  {string} userreg.rid
* @apiParam  {smallint} userreg.g_id
*
* @apiSuccess {string} Success true means success, false means fail result
* @apiSuccess {string} message Record Created if success 
* 
* @apiSuccess  (data) {string} userreg.id id
* @apiSuccess  (data) {string} userreg.rid User Id
* @apiSuccess  (data) {string} userreg.g_id Group Id
* 
* 
*/ 

/**
* @apiVersion 1.0.0
* @api {post} http://www.drupal_test.com/api/v1/drupal_test/profileupdated  Profile Updated  API - POST
* @apiDescription 
* 
* Scenario: During Updated profiles
*  
* Screen : NA
* 
* API Function:This api Update a profile info
* 
* @apiName User Profile Update post
* @apiGroup User Profile Update 
*
* @apiParam  {string} userreg.f_name
* @apiParam  {smallint} userreg.l_name
* @apiParam  {string} userreg.email
*
* @apiSuccess {string} Success true means success, false means fail result
* @apiSuccess {string} message Record Created if success 
* 
* @apiSuccess  (data) {string} userreg.rid User Id
* 
* 
*/ 

