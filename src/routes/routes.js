const routers = [
  
  {
    layout: "AuthLayout",
    path: "/auth",
    childrens: [
      {
        component: "Login",
        childPath: "/login",
      },
    ],
  },
  {
    layout: "MainLayout",
    path: "/admin",
    childrens: [
      {
        component: "Dashboard",
        childPath: "/dashboard",
      },
      {
        component: "MyBookings",
        childPath: "/all-bookings",
      },
      {
        component: "BookingDetails",
        childPath: "/booking-details",
      },
      {
        component: "ChangePassword",
        childPath: "/change-password",
      },
      {
        component: "UserTypes",
        childPath: "/user-types",
      },
      {
        component: "UserManagement",
        childPath: "/user-management",
      },
      {
        component: "AddUsers",
        childPath: "/add-user",
      },
      {
        component: "AddUserTypes",
        childPath: "/add-user-types",
      }
    ],
  },
  {
    init:'/auth/login',
    path:'/'
  },
  {
    component:'Page404',
    path:'*'
  },
]


export default routers
