// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import "./App.css";
// import Login from "./pages/Login";
// import HeroSection from "./pages/student/HeroSection";
// import MainLayout from "./layout/MainLayout";
// import Courses from "./pages/student/Courses";
// import MyLearning from "./pages/student/MyLearning";
// import Profile from "./pages/student/Profile";
// import Sidebar from "./pages/admin/Sidebar";
// import Dashboard from "./pages/admin/Dashboard";
// import CourseTable from "./pages/admin/course/CourseTable";
// import AddCourse from "./pages/admin/course/AddCourse";
// import EditCourse from "./pages/admin/course/EditCourse";
// import CreateLecture from "./pages/admin/lecture/CreateLecture";
// import EditLecture from "./pages/admin/lecture/EditLecture";
// import CourseDetail from "./pages/student/CourseDetail";
// import CourseProgress from "./pages/student/CourseProgress";
// import SearchPage from "./pages/student/SearchPage";
// import BlogPage from "./components/Blog";
// import UserTable from "./pages/admin/UserTable";
// import LogTable from "./pages/admin/LogTable";
// import {
//   AdminRoute,
//   AuthenticatedUser,
//   ProtectedRoute,
// } from "./components/ProtectedRoutes";
// import PurchaseCourseProtectedRoute from "./components/PurchaseCourseProtectedRoute";
// import { ThemeProvider } from "./components/ThemeProvider";
// import AboutTutors from "./components/AboutTutors";
// import WhyCyberMatrix from "./components/WhyCyberMatrix";
// import { Contact } from "lucide-react";
// import ContactUs from "./components/Contactus";

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainLayout />,
//     children: [
//       {
//         path: "/",
//         element: (
//           <>
//             <HeroSection />
//             <Courses />
//             <br></br>
//             <WhyCyberMatrix />
//             <br></br>
//             <AboutTutors />
//             <br></br>
//             <br></br>
//             <ContactUs />
//           </>
//         ),
//       },
//       {
//         path: "login",
//         element: (
//           <AuthenticatedUser>
//             <Login />
//           </AuthenticatedUser>
//         ),
//       },
//       {
//         path: "blog",
//         element: <BlogPage />,
//       },
      
//       {
//         path: "my-learning",
//         element: (
//           <ProtectedRoute>
//             <MyLearning />
//           </ProtectedRoute>
//         ),
//       },
//       {
//         path: "profile",
//         element: (
//           <ProtectedRoute>
//             <Profile />
//           </ProtectedRoute>
//         ),
//       },
//       {
//         path: "course/search",
//         element: (
//           <ProtectedRoute>
//             <SearchPage />
//           </ProtectedRoute>
//         ),
//       },
//       {
//         path: "course-detail/:courseId",
//         element: (
//           <ProtectedRoute>
//             <CourseDetail />
//           </ProtectedRoute>
//         ),
//       },
//       {
//         path: "course-progress/:courseId",
//         element: (
//           <ProtectedRoute>
//             <PurchaseCourseProtectedRoute>
//             <CourseProgress />
//             </PurchaseCourseProtectedRoute>
//           </ProtectedRoute>
//         ),
//       },

//       // admin routes start from here
//       {
//         path: "admin",
//         element: (
//           <AdminRoute>
//             <Sidebar />
//           </AdminRoute>
//         ),
//         children: [
//           {
//             path: "dashboard",
//             element: <Dashboard />,
//           },
//           {
//             path: "course",
//             element: <CourseTable />,
//           },
//           {
//             path: "users",
//             element: <UserTable />,
//           },
//           {
//             path: "logs",
//             element: <LogTable />,

//           },
//           {
//             path: "course/create",
//             element: <AddCourse />,
//           },
//           {
//             path: "course/:courseId",
//             element: <EditCourse />,
//           },
//           {
//             path: "course/:courseId/lecture",
//             element: <CreateLecture />,
//           },
//           {
//             path: "course/:courseId/lecture/:lectureId",
//             element: <EditLecture />,
//           },
//         ],
//       },
//     ],
//   },
// ]);

// function App() {
//   return (
//     <main>
//       <ThemeProvider>
//       <RouterProvider router={appRouter} />
//       </ThemeProvider>
//     </main>
//   );
// }

// export default App;

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import HeroSection from "./pages/student/HeroSection";
import MainLayout from "./layout/MainLayout";
import Courses from "./pages/student/Courses";
import MyLearning from "./pages/student/MyLearning";
import Profile from "./pages/student/Profile";
import Sidebar from "./pages/admin/Sidebar";
import Dashboard from "./pages/admin/Dashboard";
import CourseTable from "./pages/admin/course/CourseTable";
import AddCourse from "./pages/admin/course/AddCourse";
import EditCourse from "./pages/admin/course/EditCourse";
import CreateLecture from "./pages/admin/lecture/CreateLecture";
import EditLecture from "./pages/admin/lecture/EditLecture";
import CourseDetail from "./pages/student/CourseDetail";
import CourseProgress from "./pages/student/CourseProgress";
import SearchPage from "./pages/student/SearchPage";
import BlogPage from "./components/Blog";
import UserTable from "./pages/admin/UserTable";
import LogTable from "./pages/admin/LogTable";
import {
  AdminRoute,
  AuthenticatedUser,
  ProtectedRoute,
} from "./components/ProtectedRoutes";
import PurchaseCourseProtectedRoute from "./components/PurchaseCourseProtectedRoute";
import { ThemeProvider } from "./components/ThemeProvider";
import AboutTutors from "./components/AboutTutors";
import WhyCyberMatrix from "./components/WhyCyberMatrix";
import ContactUs from "./components/Contactus";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <HeroSection />
            <div id="courses">
              <Courses />
            </div>
            <div id="whycybermatrix">
              <WhyCyberMatrix />
            </div>
            <AboutTutors />
            <div id="contactus">
              <ContactUs />
            </div>
          </>
        ),
      },
      {
        path: "login",
        element: (
          <AuthenticatedUser>
            <Login />
          </AuthenticatedUser>
        ),
      },
      {
        path: "blog",
        element: <BlogPage />,
      },
      {
        path: "my-learning",
        element: (
          <ProtectedRoute>
            <MyLearning />
          </ProtectedRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: "course/search",
        element: (
          <ProtectedRoute>
            <SearchPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "course-detail/:courseId",
        element: (
          <ProtectedRoute>
            <CourseDetail />
          </ProtectedRoute>
        ),
      },
      {
        path: "course-progress/:courseId",
        element: (
          <ProtectedRoute>
            <PurchaseCourseProtectedRoute>
              <CourseProgress />
            </PurchaseCourseProtectedRoute>
          </ProtectedRoute>
        ),
      },
      // admin routes start from here
      {
        path: "admin",
        element: (
          <AdminRoute>
            <Sidebar />
          </AdminRoute>
        ),
        children: [
          {
            path: "dashboard",
            element: <Dashboard />,
          },
          {
            path: "course",
            element: <CourseTable />,
          },
          {
            path: "users",
            element: <UserTable />,
          },
          {
            path: "logs",
            element: <LogTable />,
          },
          {
            path: "course/create",
            element: <AddCourse />,
          },
          {
            path: "course/:courseId",
            element: <EditCourse />,
          },
          {
            path: "course/:courseId/lecture",
            element: <CreateLecture />,
          },
          {
            path: "course/:courseId/lecture/:lectureId",
            element: <EditLecture />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <main>
      <ThemeProvider>
        <RouterProvider router={appRouter} />
      </ThemeProvider>
    </main>
  );
}

export default App;
