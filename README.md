# Full Stack CRUD Application

This is a full-stack CRUD (Create, Read, Update, Delete) application built using **React.js** with **Vite** on the frontend and **Python** with **Django** on the backend. The project leverages **Django REST Framework** for API development, **serializers** for data handling, and includes basic **CSS** for styling the user interface.

## Features

- Create, read, update, and delete records through a user-friendly interface.
- RESTful API built with Django REST Framework.
- Efficient data serialization for seamless communication between frontend and backend.
- Responsive and clean UI with custom CSS styling.
- Fast development and build process powered by Vite.

## Tech Stack

- **Frontend**: React.js, Vite, CSS
- **Backend**: Python, Django, Django REST Framework
- **Data Handling**: Django Serializers

## Installation

### Prerequisites

- Node.js (for React and Vite)
- Python 3.x (for Django)
- pip (Python package manager)
- Git
- Check out requirements.txt

### Setup

1. **Clone the repository**:

```bash
   git clone https://github.com/Phani-LP/rdjproject.git
   cd rdjproject
```

2. **Backend setup**:

```bash
  cd backend
  python -m venv venv
  source venv/bin/activate  # On Windows: venv\Scripts\activate
  pip install -r requirements.txt
  python manage.py migrate
  python manage.py runserver
```

3. **Frontend Setup**:
   cd frontend
   npm install
   npm run dev

4.**Access the Application**:

<ul>
<li>Backend API: http://localhost:8000</li>
<li>Frontend: http://localhost:5173</li>
</ul>

## Usage
- Navigate to the frontend URL (`http://localhost:5173`) to interact with the CRUD interface.
- The React frontend uses **Fetch** to make API calls to the backend for creating, reading, updating, and deleting records.
- The backend, built with **Django REST Framework**, provides RESTful API endpoints to handle CRUD operations.
- Example API endpoints:
  - `GET /api/items/` - List all items
  - `POST /api/items/` - Create a new item
  - `PUT /api/items/:id/` - Update an item
  - `DELETE /api/items/:id/` - Delete an item
- Test API endpoints programmatically using tools like Postman or curl.



**Project Structure**:<br>
rdjproject/<br>
├── rdjproject/                # Django backend<br>
│   ├── api/               # Django app<br>
│   ├── manage.py          # Django management script<br>
│   └── requirements.txt   # Python dependencies<br>
├── frontend/              # React frontend<br>
│   ├── src/               # React components and CSS<br>
│   ├── package.json       # Node.js dependencies<br>
│   └── vite.config.js     # Vite configuration<br>
└── README.md              # Project documentation<br>

**Contributing**
1. Fork the repository.<br>
2. Create a new branch (git checkout -b feature/your-feature).<br>
3. Commit your changes (git commit -m "Add your feature").<br>
4. Push to the branch (git push origin feature/your-feature).<br>
5. Open a pull request.

**Contact**:<br>
For questions or feedback, fill the form in my portfolio:
<a href="https://phani-lp.github.io/dnagaphanindra-portfolio/">D Naga Phanindra</a>
