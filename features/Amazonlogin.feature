Feature: The Amazon Website

  Scenario Outline: As a user, I can signin

    Given I am on the login page
    When I login with <username> and <password>
    Then I should search and add <item>
    
    Examples:
      | username   | password  | item                                    |
      | 7387877736 | Test123   | New Apple iPhone 12 Mini (128GB) - Blue |

 