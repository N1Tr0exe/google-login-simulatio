tell application "CotEditor"
    activate
    set newDoc to make new document with properties {text:"Email: your-email@example.com\nPassword: your-password-here"}
    save newDoc in POSIX file "/Users/calebwoodhams/Downloads/credentials.txt"
end tell
