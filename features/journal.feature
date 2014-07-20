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



    As an author I want to edit my journal entries so I can fix errors.
    As an author I want to use MarkDown to create and edit my entries so that I can format them nicely.
    As an author I want to see colorized code samples in my journal entries so that I can more easily understand them.
