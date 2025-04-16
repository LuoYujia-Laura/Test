Feature: User login

Scenario: Successful login with correct credentials
  Given the user is on the login page
  When the user enters correct credentials
  Then the user should be redirected to the dashboard
