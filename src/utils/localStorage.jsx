
// localStorage.clear()

const employees = [
  {
    "id": 1,
    "firstname": "John",
    "email": "e@e.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Bug Fixing",
        "taskDescription": "Resolve bugs in the authentication module.",
        "taskDate": "2024-01-02",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "UI Enhancement",
        "taskDescription": "Improve the responsiveness of the dashboard page.",
        "taskDate": "2023-12-28",
        "category": "Design"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Database Optimization",
        "taskDescription": "Optimize database queries for faster load times.",
        "taskDate": "2024-01-01",
        "category": "Database"
      }
    ],
    "taskCounts": {
      "active": 2,
      "newTask": 2,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 2,
    "firstname": "Emma",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "API Integration",
        "taskDescription": "Integrate the third-party payment gateway.",
        "taskDate": "2024-01-03",
        "category": "Backend"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Unit Testing",
        "taskDescription": "Write unit tests for the login module.",
        "taskDate": "2023-12-29",
        "category": "Testing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Feature Deployment",
        "taskDescription": "Deploy the new analytics feature to production.",
        "taskDate": "2023-12-30",
        "category": "Deployment"
      }
    ],
    "taskCounts": {
      "active": 1,
      "newTask": 0,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 3,
    "firstname": "Liam",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Code Review",
        "taskDescription": "Review the code submitted by Employee 1.",
        "taskDate": "2024-01-02",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Documentation",
        "taskDescription": "Prepare documentation for the API services.",
        "taskDate": "2023-12-27",
        "category": "Documentation"
      }
    ],
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 4,
    "firstname": "Olivia",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Frontend Development",
        "taskDescription": "Develop the user profile page.",
        "taskDate": "2024-01-04",
        "category": "Frontend"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Testing Automation",
        "taskDescription": "Automate regression testing for the billing module.",
        "taskDate": "2023-12-26",
        "category": "Testing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "System Monitoring",
        "taskDescription": "Set up monitoring for the production environment.",
        "taskDate": "2023-12-25",
        "category": "Operations"
      }
    ],
    "taskCounts": {
      "active": 1,
      "newTask": 0,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 5,
    "firstname": "Sophia",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Security Audit",
        "taskDescription": "Conduct a security audit of the application.",
        "taskDate": "2024-01-05",
        "category": "Security"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Bug Triage",
        "taskDescription": "Analyze and prioritize reported bugs.",
        "taskDate": "2024-01-03",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Sprint Planning",
        "taskDescription": "Participate in the next sprint planning session.",
        "taskDate": "2023-12-29",
        "category": "Management"
      }
    ],
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  }
  
];

   const admin = [{
        "id": 1,
        "firstname": "Musa",
        "email": "admin@example.com",
        "password": "admin123"
      }];
    
  export const setLocalStoarge = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
  };
  export const getLocalStoarge = () => {
    // const data = localStorage.getItem('employees');
    // console.log(JSON.parse(data));
    // better way
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));
    // console.log(employees, admin)

    return{employees, admin}
  } 