# **Work Stream**

**Work Stream** is an innovative employee management web application designed to streamline employee workflow updates, HR management tasks, and admin-level oversight. It features a user-friendly interface, secure role-based authentication, and dynamic dashboards for effective monitoring and collaboration.

---

## **Features**

- **Role-Based Functionality**:
  - **Employee**: Update workflow, view payment history, and manage tasks effortlessly.
  - **HR Executive**: Monitor employee performance, verify accounts, and handle salary payments.
  - **Admin**: Oversee all employee records, adjust salaries, and manage HR roles.

- **Dynamic Dashboard**:
  - Fully responsive design for desktop, tablet, and mobile views.
  - Optimized for seamless navigation and data presentation.

- **Workflow Management**:
  - Employees can add, edit, and delete their daily work tasks.
  - HR can filter and view workflow records by employee and month.

- **Salary Management**:
  - HR can initiate payments for verified employees.
  - Admin approves payments and prevents duplicate monthly payouts.

- **Authentication**:
  - Secure email/password authentication with Firebase.
  - Role selection during registration (Employee/HR only).
  - Social login (e.g., Google) assigns the Employee role by default.

- **Notifications**:
  - Toast alerts for all CRUD operations, authentication, and updates.
  - No browser default alerts for a modern user experience.

- **Data Handling**:
  - TanStack Query for efficient data fetching (GET requests only).
  - JWT-based middleware for secure role-based API operations.

- **Custom Tables and Charts**:
  - Interactive tables for workflow, salary, and employee data.
  - Dynamic bar charts for salary history visualization.

- **Contact Us**:
  - Visitors can submit feedback and inquiries via the contact form.
  - Admin can review all messages in a dedicated section.

- **Security**:
  - Sensitive credentials are hidden using environment variables.
  - Role verification via JWT ensures secure access to role-specific operations.

---
