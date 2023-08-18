const routers = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    component: "AuthLayout",
    path: "/login",
    name: "Login",
    exact: false,
    childrens: [
      {
        component: "Login",
        path: "/",
        componentPath: "pages/Auth/Login",
        name: "Login",
        auth: false,
        exact: true,
      },
    ],
  },
  {
    component: "MainLayout",
    path: "/landingPage",
    name: "LandingPage",
    exact: false,
    childrens: [
      {
        component: "Dashboard",
        path: "/",
        componentPath: "pages/LandingPage",
        name: "Dashboard",
        auth: false,
        exact: true,
      },
    ],
  },
  {
    component: "MainLayout",
    path: "/user-management",
    name: "UserManagement",
    exact: false,
    childrens: [
      {
        component: "UserManagement",
        path: "/",
        componentPath: "pages/UserManagement",
        name: "UserManagement",
        auth: false,
        exact: true,
      },
    ],
  },
  {
    component: "MainLayout",
    path: "/order-management",
    name: "OrderManagement",
    exact: false,
    childrens: [
      {
        component: "OrderManagement",
        path: "/",
        componentPath: "pages/OrderManagement",
        name: "OrderManagement",
        auth: false,
        exact: true,
      },
    ],
  },
  {
    component: "MainLayout",
    path: "/product-management",
    name: "ProductManagement",
    exact: false,
    childrens: [
      {
        component: "ProductManagement",
        path: "/",
        componentPath: "pages/ProductManagement",
        name: "ProductManagement",
        auth: false,
        exact: true,
      },
    ],
  },
  {
    component: "MainLayout",
    path: "/appointment-management",
    name: "AppointmentManagement",
    exact: false,
    childrens: [
      {
        component: "AppointmentManagement",
        path: "/",
        componentPath: "pages/AppointmentManagement",
        name: "AppointmentManagement",
        auth: false,
        exact: true,
      },
    ],
  },
  {
    component: "MainLayout",
    path: "/customer-management",
    name: "CustomerManagement",
    exact: false,
    childrens: [
      {
        component: "CustomerManagement",
        path: "/",
        componentPath: "pages/CustomerManagement",
        name: "CustomerManagement",
        auth: false,
        exact: true,
      },
    ],
  },
  {
    component: "MainLayout",
    path: "/service-management",
    name: "ServiceManagement",
    exact: false,
    childrens: [
      {
        component: "ServiceManagement",
        path: "/",
        componentPath: "pages/ServiceManagement",
        name: "ServiceManagement",
        auth: false,
        exact: true,
      },
    ],
  },
  {
    component: "MainLayout",
    path: "/coupon-management",
    name: "CouponManagement",
    exact: false,
    childrens: [
      {
        component: "CouponManagement",
        path: "/",
        componentPath: "pages/CouponManagement",
        name: "CouponManagement",
        auth: false,
        exact: true,
      },
    ],
  },
  {
    component: "MainLayout",
    path: "/blog-management",
    name: "Blog",
    exact: false,
    childrens: [
      {
        component: "Blog",
        path: "/",
        componentPath: "pages/Blog",
        name: "Blog",
        auth: false,
        exact: true,
      },
    ],
  },
  {
    component: "MainLayout",
    path: "/sample",
    name: "Sample",
    exact: false,
    childrens: [
      {
        component: "Sample",
        path: "/",
        componentPath: "pages/Sample",
        name: "Sample",
        auth: false,
        exact: true,
      },
    ],
  },
];
export default routers;
