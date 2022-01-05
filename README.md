# Requirements
Latests Node LTS

# Instructions
Run `npm start` in both folders and visit `http://localhost:3000/`

# Info
You can upload and delete multiple files, assign users on them and view their info below their names. Each page shows 10 files. Files with same name will be overwritten.

# Known bugs
Assigning people broke when multi-file was introduced.

# Assignment – Full Stack Engineer
Your objective is to build a small project called DocumentManager. The application is a document
catalog where the user can upload, browse and possibly search and filter their documents.
Let’s describe a few typical user flows to get you into the picture.

### Document List
When a user visits the DocumentList they can see a list of uploaded documents with some basic
information:
- Name
- Type
- Upload date
- Assignees (one or more users that each document is assigned to.)

Although this list shouldn’t be that long, the user should be able to easily browse through a lot of
documents with a pagination of 10 documents per page.
The document list should also provide a delete action per document.

## Uploader
Another thing a user of DocumentManager can do, is to upload their documents. Typical documents
are PDF or HTML files and the user should be able to select and upload multiple documents. When
users select documents for upload, they should be able to add one or more Assignees (on the whole
batch, not per document).
When the user finally clicks the upload button, a progress bar should appear. In case of multiple
documents it would be nice to have an indication of the uploading progress per document.

(Optional) Search and Filter
Users of DocumentManager have suggested that it would make their life easier if they could search
documents by their name and maybe filter documents by their properties.

## Implementation
You will need to provide a working prototype of the application using HTML, CSS, Angular (or
other frontend framework), Node.js. MongoDB is preferred as well as using dockers for client,
server and database. The application should be able to run on a browser such as Firefox or Chrome
(latest versions). Feel free to use Material, Bootstrap or other frameworks for the UI components
and any necessary third party library for Node.js.

### Core requirements:
- User should be able to browse all the documents in the Document List.
- User should be able to delete documents in the Document List.
- User should be able to assign users on the selected documents before uploading using the Uploader.
- User should be able to upload one or more documents using the Uploader.
- User should be able to see the progress of the uploading process.
- Provide some basic instructions of how to run the application.

### Optional requirements:
- Add Infinite scroll functionality instead of pagination in the Document List. The view starts
with 20 documents and each time the user scrolls near the bottom of the page another 20
documents are loaded and added to the list.
- Upload progress per document in case of multiple upload.
- User should be able to search by name.
- User should be able to filter by type.
- User should be able to filter by multiple Assignees.
- User should be able to filter by upload date ranges.
- User should be able to see additional user data when hovering on a Assignee in Document
List.
If you have any question on the requirements feel free to send an e-mail for clarification.
Furthermore, you are free to include any additional features that you may find relevant or could
showcase your skills but that is not by any means necessary. Please bear in mind that you
should cover the core requirements first before attempting any improvements. You could also pick
from the optional requirements independently and as you like.

### Submit your assignment
First fork this repository privately in your github account, then, when you are done coding and ready to submit 
your assignment, please share it with us.
