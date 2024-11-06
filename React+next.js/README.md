# Assignment 8

Create a **Next.js** application using the **app router** that manages a **person registry** storing the following information for each registered person:
- **First Name**
- **Last Name**
- **Optional Notes**

### Database Setup
- Store the information in a **MongoDB** collection:
  - **Database Name**: `onm4ss24a8`
  - **Collection Name**: Your student ID (e.g., `s22102380xx`).

### Root Page
- List the existing database entries in a table with the following columns:
  - `id`
  - `first name`
  - `last name`
  - `notes`
- The page should be a **server component**.
- Set the **revalidation timeout** to **5 seconds**.

### API Setup
- Create a **POST REST route** under `/api` to store new person entries in the database.
- Use the following method to access the request body and parse the data:
  ```js
  export async function POST(request) {
    const body = await request.json()
    ...
  }
