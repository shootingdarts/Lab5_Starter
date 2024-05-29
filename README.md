# Lab 5 - Starter
David Liu, Joshua Villanueva

## [Expose](https://shootingdarts.github.io/Lab5_Starter/explore.html)
## [Explore](https://shootingdarts.github.io/Lab5_Starter/expose.html)

### 1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

No, we would not use a unit test to test the message feature of messaging application. The fact that we are testing if a user can properly write a message and send it to another user we are looking at an outgoing message and an incoming message from two different devices. This includes the message being sent to a server or cloud and coming back down from that server cloud to the second device that is receiving the message. We can see here that this includes many different components that have to interact with each other on an application level and since one of the cons is that we cannot test how individual components are interact with each other especially on an application level this highly limits our ability to test by using a unit test with J test. 

### 2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

We would use a unit test to test the "max message length" feature of the application. As this feature only involes the textbox aspect of the app, and changing other parts won't affect the non-related unit tests. 
