Feature: Learning Journal
    Editing learning journal

    Scenario: Author can see edit button
        Given an author
        And a journal entry
        When I view the home page
        Then I see an edit button

    Scenario: Author can edit posts
        Given an author
        And a journal entry
        When I click the edit button
        Then I see the edit entry form

    Scenario: Author can save edits
        Given an author
        When I submit the edit form
        Then I view the home page
        And I see my updated entry

    Scenario: Non-Author user can not see edit button
        Given non-author user
        When I view the home page
        Then I don't see an edit button

    Scenario: Author can input colorized code sample
        Given text containing Markdown
        And an existing entry
        When I view home page
        Then I see my code sample highlighted

