# Routes for 'exams'

/ 
list of exams
no buttons for changing anything
a button for entering the 'change' mode -> navigates to '/change'

/change
list of exams, with Delete and Edit buttons
    Delete: modified the state, stay in /change (no navigation)
    Edit: navigate to '/edit/:examCode'
a button for Add -> navigate to '/add'
a button for entering the 'view' mode -> nav to '/'

/edit/:examCode
form(*) for editing an exam, default=exam values corresponding to :examCode
a button for Cancel -> navigate to /change
a button for Save -> change state, navigate to /change

/add
form(*) for entering an exam, default=EMPTY
a button for Cancel -> navigate to /change
a button for Add -> change state, navigate to /change

(*) same form, with different 'mode' props
