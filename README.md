1:
The code smells I have indentified are:
a: bad variable names
b: duplicated code

2:
a: the original code had names like a,b,c, bI, bD, bR which is very confusing to the reader. I renamed then increment_button_id, counter_display, counter, increment_btn, decrement_btn and reset_btn respectfully.
b: the same 3 lines were repeated in every event listner to update the UI, so I made a function that updates the UI and replaced the duplicated code with the function.
