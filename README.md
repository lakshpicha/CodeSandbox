# CodeSandbox
# 🧺 Commodities Management System (Frontend)

A role-based Commodities Management System built as part of a take-home frontend challenge.  
The application focuses on authentication, role-based access control (RBAC), and clean UI/UX.

---

## 🚀 Features

### 🔐 Authentication & Roles
- Login using **email & password**
- Two user roles:
  - **Manager**
  - **Store Keeper**

### 🛡️ Role-Based Access Control
| Feature | Manager | Store Keeper |
|------|---------|--------------|
| Login | ✅ | ✅ |
| Dashboard | ✅ | ❌ |
| View Products | ✅ | ✅ |
| Add/Edit Products | ✅ | ✅ |
| Role-Based UI | ✅ | ✅ |

- Dashboard access restricted to **Managers only**
- UI menus and actions change dynamically based on role
- Unauthorized access is blocked even via direct URL

---

### 📦 Product Management
- View all commodities/products
- Add new products
- Edit existing products
- Clean and reusable form components

---

### 🌗 UI Enhancements
- Light / Dark mode toggle
- Theme preference stored using `localStorage`
- Responsive and modern UI

---

## 🛠️ Tech Stack

**Frontend**
- HTML5
- CSS3
- JavaScript (Vanilla JS)

**Optional / Extendable**
- Can be migrated easily to Next.js + TypeScript
- Backend-ready (GraphQL / REST compatible)

---

## 📁 Project Structure

