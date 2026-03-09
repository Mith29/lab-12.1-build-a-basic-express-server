1. Difference between res.send() and res.sendFile()
res.send() sends data like text or JSON directly to the client. res.sendFile() sends a file from the server, such as an HTML page. 

2. Why the path module is necessary
The path module helps create the correct file path so the server can find files on any operating system. Using only a relative path like public/index.html might cause errors if the server cannot locate the file.

3. How to add a third page
Create a new file menu.html in the public folder, then add a new route like /menu in server.js and use res.sendFile() to send the file.