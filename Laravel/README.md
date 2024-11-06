# Assignment 9

Create a Laravel App providing a form with the following text fields:
- **Firstname**
- **Lastname**
- **Email**

Include a **Checkbox** for Newsletter registration.

### Requirements:
- All text fields are required. Add Validation Rules at your discretion.
- In case of validation errors, the correct values should be kept in the form.
- After successful validation, display a page with the submitted form values.

---

# Assignment 11

Create a Laravel app to manage **sports teams** and their **players** via a CRUD web interface.

### Models and Relationships
1. **Team**:
   - Fields: `id` (auto), `timestamps`, `name*` (string), `short name*` (3-letter string), `description` (text), `players` (1:n relation with Player).
  
2. **Player**:
   - Fields: `id` (auto), `timestamps`, `first name*` (string), `last name*` (string), `description` (text), `team` (1:n relation with Team).

### Requirements:
- Marked fields `(*)` are required.
- Allow nullable fields by adding `->nullable()` to the column definition in the migration file.
- **Hint**: Nested routes are unnecessary since players are not tied to a specific team (players can change teams).

### Team Form
- Does not need to show any player information.

### Player Form
- Must include a single select box to select the team.

### Pages and Features

1. **Team Index Page**:
   - Displays a table with columns:
     - `id`
     - `short name` (linked to the team detail page - show action)
     - `name`
     - `action` (edit, delete links per team)
   - Ordered by `short name`:
     ```php
     Team::orderBy('<columnName>')->get();
     ```

2. **Team Detail Page (Show Action)**:
   - Displays `name`, `short name`, `description`, and the list of players (each player name linked to the player's detail page).

3. **Player Index Page**:
   - Displays a table with columns:
     - `id`
     - `last name` (linked to the player detail page)
     - `first name`
     - `team short name`
     - `action` (edit, delete links per player)
   - Ordered by `last name`.

4. **Player Detail Page (Show Action)**:
   - Displays `first name`, `last name`, `description`, and the `team long name` (linked to the team's detail page).

5. **Entry Page (Root URL)**:
   - Contains links to the **Team** and **Player** index pages.

6. **Navigation**:
   - Detail pages link back to index pages.
   - Index pages link back to the entry page.

### Database Setup
- Create a separate database for this app:
  - **Database Name**: `sportsdb`
  - Create it using **phpMyAdmin**.
  - Configure the database in the `.env` file.
  - Run migrations to create the necessary tables.
