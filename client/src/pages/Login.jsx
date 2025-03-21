// // McgPr7oX7v1mMcbN
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import {
//   useLoginUserMutation,
//   useRegisterUserMutation,
// } from "@/features/api/authApi";
// import { Loader2 } from "lucide-react";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "sonner";

// const Login = () => {
//   const [signupInput, setSignupInput] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const [loginInput, setLoginInput] = useState({ email: "", password: "" });

//   const [
//     registerUser,
//     {
//       data: registerData,
//       error: registerError,
//       isLoading: registerIsLoading,
//       isSuccess: registerIsSuccess,
//     },
//   ] = useRegisterUserMutation();
//   const [
//     loginUser,
//     {
//       data: loginData,
//       error: loginError,
//       isLoading: loginIsLoading,
//       isSuccess: loginIsSuccess,
//     },
//   ] = useLoginUserMutation();
//   const navigate = useNavigate();

//   const changeInputHandler = (e, type) => {
//     const { name, value } = e.target;
//     if (type === "signup") {
//       setSignupInput({ ...signupInput, [name]: value });
//     } else {
//       setLoginInput({ ...loginInput, [name]: value });
//     }
//   };

//   const handleRegistration = async (type) => {
//     const inputData = type === "signup" ? signupInput : loginInput;
//     const action = type === "signup" ? registerUser : loginUser;
//     await action(inputData);
//   };

//   useEffect(() => {
//     if(registerIsSuccess && registerData){
//       toast.success(registerData.message || "Signup successful.")
//     }
//     if(registerError){
//       toast.error(registerError.data.message || "Signup Failed");
//     }
//     if(loginIsSuccess && loginData){
//       toast.success(loginData.message || "Login successful.");
//       navigate("/");
//     }
//     if(loginError){ 
//       toast.error(loginError.data.message || "login Failed");
//     }
//   }, [
//     loginIsLoading,
//     registerIsLoading,
//     loginData,
//     registerData,
//     loginError,
//     registerError,
//   ]);

//   return (
//     <div className="flex items-center w-full justify-center mt-20">
//       <Tabs defaultValue="login" className="w-[400px]">
//         <TabsList className="grid w-full grid-cols-2">
//           <TabsTrigger value="signup">Signup</TabsTrigger>
//           <TabsTrigger value="login">Login</TabsTrigger>
//         </TabsList>
//         <TabsContent value="signup">
//           <Card>
//             <CardHeader>
//               <CardTitle>Signup</CardTitle>
//               <CardDescription>
//                 Create a new account and click signup when you're done.
//               </CardDescription>
//             </CardHeader>
//             <CardContent className="space-y-2">
//               <div className="space-y-1">
//                 <Label htmlFor="name">Name</Label>
//                 <Input
//                   type="text"
//                   name="name"
//                   value={signupInput.name}
//                   onChange={(e) => changeInputHandler(e, "signup")}
//                   placeholder="Eg. patel"
//                   required="true"
//                 />
//               </div>
//               <div className="space-y-1">
//                 <Label htmlFor="username">Email</Label>
//                 <Input
//                   type="email"
//                   name="email"
//                   value={signupInput.email}
//                   onChange={(e) => changeInputHandler(e, "signup")}
//                   placeholder="Eg. patel@gmail.com"
//                   required="true"
//                 />
//               </div>
//               <div className="space-y-1">
//                 <Label htmlFor="username">Password</Label>
//                 <Input
//                   type="password"
//                   name="password"
//                   value={signupInput.password}
//                   onChange={(e) => changeInputHandler(e, "signup")}
//                   placeholder="Eg. xyz"
//                   required="true"
//                 />
//               </div>
//             </CardContent>
//             <CardFooter>
//               <Button
//                 disabled={registerIsLoading}
//                 onClick={() => handleRegistration("signup")}
//               >
//                 {registerIsLoading ? (
//                   <>
//                     <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please
//                     wait
//                   </>
//                 ) : (
//                   "Signup"
//                 )}
//               </Button>
//             </CardFooter>
//           </Card>
//         </TabsContent>
//         <TabsContent value="login">
//           <Card>
//             <CardHeader>
//               <CardTitle>Login</CardTitle>
//               <CardDescription>
//                 Login your password here. After signup, you'll be logged in.
//               </CardDescription>
//             </CardHeader>
//             <CardContent className="space-y-2">
//               <div className="space-y-1">
//                 <Label htmlFor="current">Email</Label>
//                 <Input
//                   type="email"
//                   name="email"
//                   value={loginInput.email}
//                   onChange={(e) => changeInputHandler(e, "login")}
//                   placeholder="Eg. patel@gmail.com"
//                   required="true"
//                 />
//               </div>
//               <div className="space-y-1">
//                 <Label htmlFor="new">Password</Label>
//                 <Input
//                   type="password"
//                   name="password"
//                   value={loginInput.password}
//                   onChange={(e) => changeInputHandler(e, "login")}
//                   placeholder="Eg. xyz"
//                   required="true"
//                 />
//               </div>
//             </CardContent>
//             <CardFooter>
//               <Button
//                 disabled={loginIsLoading}
//                 onClick={() => handleRegistration("login")}
//               >
//                 {loginIsLoading ? (
//                   <>
//                     <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please
//                     wait
//                   </>
//                 ) : (
//                   "Login"
//                 )}
//               </Button>
//             </CardFooter>
//           </Card>
//         </TabsContent>
//       </Tabs>
//     </div>
//   );
// };
// export default Login;

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  useLoginUserMutation,
  useRegisterUserMutation,
} from "@/features/api/authApi";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const [signupInput, setSignupInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loginInput, setLoginInput] = useState({ email: "", password: "" });

  const [
    registerUser,
    {
      data: registerData,
      error: registerError,
      isLoading: registerIsLoading,
      isSuccess: registerIsSuccess,
    },
  ] = useRegisterUserMutation();
  const [
    loginUser,
    {
      data: loginData,
      error: loginError,
      isLoading: loginIsLoading,
      isSuccess: loginIsSuccess,
    },
  ] = useLoginUserMutation();
  const navigate = useNavigate();

  const changeInputHandler = (e, type) => {
    const { name, value } = e.target;
    if (type === "signup") {
      setSignupInput({ ...signupInput, [name]: value });
    } else {
      setLoginInput({ ...loginInput, [name]: value });
    }
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[@#*])[A-Za-z\d@#*]{12,}$/;
    return regex.test(password);
  };

  const handleRegistration = async (type) => {
    const inputData = type === "signup" ? signupInput : loginInput;
    if (!validatePassword(inputData.password)) {
      toast.error("Password must be at least 12 characters long and include @, #, or *.");
      return;
    }
    const action = type === "signup" ? registerUser : loginUser;
    await action(inputData);
  };

  useEffect(() => {
    if(registerIsSuccess && registerData){
      toast.success(registerData.message || "Signup successful.")
    }
    if(registerError){
      toast.error(registerError.data.message || "Signup Failed");
    }
    if(loginIsSuccess && loginData){
      toast.success(loginData.message || "Login successful.");
      navigate("/");
    }
    if(loginError){ 
      toast.error(loginError.data.message || "Login Failed");
    }
  }, [
    loginIsLoading,
    registerIsLoading,
    loginData,
    registerData,
    loginError,
    registerError,
  ]);

  return (
    <div className="flex items-center w-full justify-center mt-20">
      <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signup">Signup</TabsTrigger>
          <TabsTrigger value="login">Login</TabsTrigger>
        </TabsList>
        <TabsContent value="signup">
          <Card>
            <CardHeader>
              <CardTitle>Signup</CardTitle>
              <CardDescription>
                Create a new account and click signup when you're done.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  name="name"
                  value={signupInput.name}
                  onChange={(e) => changeInputHandler(e, "signup")}
                  placeholder="Eg. patel"
                  required
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Email</Label>
                <Input
                  type="email"
                  name="email"
                  value={signupInput.email}
                  onChange={(e) => changeInputHandler(e, "signup")}
                  placeholder="Eg. patel@gmail.com"
                  required
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Password</Label>
                <Input
                  type="password"
                  name="password"
                  value={signupInput.password}
                  onChange={(e) => changeInputHandler(e, "signup")}
                  placeholder="Eg. xyz"
                  required
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button
                disabled={registerIsLoading}
                onClick={() => handleRegistration("signup")}
              >
                {registerIsLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please
                    wait
                  </>
                ) : (
                  "Signup"
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Login your password here. After signup, you'll be logged in.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Email</Label>
                <Input
                  type="email"
                  name="email"
                  value={loginInput.email}
                  onChange={(e) => changeInputHandler(e, "login")}
                  placeholder="Eg. patel@gmail.com"
                  required
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">Password</Label>
                <Input
                  type="password"
                  name="password"
                  value={loginInput.password}
                  onChange={(e) => changeInputHandler(e, "login")}
                  placeholder="Eg. xyz"
                  required
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button
                disabled={loginIsLoading}
                onClick={() => handleRegistration("login")}
              >
                {loginIsLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please
                    wait
                  </>
                ) : (
                  "Login"
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Login;






// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "sonner";
// import { Loader2 } from "lucide-react";
// import {
//   useLoginUserMutation,
//   useRegisterUserMutation,
// } from "@/features/api/authApi";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

// const Login = () => {
//   const [signupInput, setSignupInput] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const [loginInput, setLoginInput] = useState({ email: "", password: "" });

//   const [
//     registerUser,
//     { data: registerData, error: registerError, isLoading: registerIsLoading, isSuccess: registerIsSuccess },
//   ] = useRegisterUserMutation();
//   const [
//     loginUser,
//     { data: loginData, error: loginError, isLoading: loginIsLoading, isSuccess: loginIsSuccess },
//   ] = useLoginUserMutation();

//   const navigate = useNavigate();

//   const changeInputHandler = (e, type) => {
//     const { name, value } = e.target;
//     if (type === "signup") {
//       setSignupInput({ ...signupInput, [name]: value });
//     } else {
//       setLoginInput({ ...loginInput, [name]: value });
//     }
//   };

//   const validatePassword = (password) => {
//     const regex = /^(?=.*[@#*])[A-Za-z\d@#*]{12,}$/;
//     return regex.test(password);
//   };

//   const handleRegistration = async (type) => {
//     const inputData = type === "signup" ? signupInput : loginInput;
//     if (!validatePassword(inputData.password)) {
//       toast.error("Password must be at least 12 characters and include @, #, or *.");
//       return;
//     }
//     const action = type === "signup" ? registerUser : loginUser;
//     await action(inputData);
//   };

//   useEffect(() => {
//     if (registerIsSuccess && registerData) {
//       toast.success(registerData.message || "Signup successful.");
//     }
//     if (registerError) {
//       toast.error(registerError.data.message || "Signup Failed");
//     }
//     if (loginIsSuccess && loginData) {
//       toast.success(loginData.message || "Login successful.");
//       navigate("/");
//     }
//     if (loginError) {
//       toast.error(loginError.data.message || "Login Failed");
//     }
//   }, [loginData, registerData, loginError, registerError]);

//   const [isRightPanelActive, setRightPanelActive] = useState(false);

//   return (
//     <div className="flex items-center justify-center w-full h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
//       <div className={`relative w-[800px] max-w-full min-h-[500px] bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transition-all duration-700 ${isRightPanelActive ? 'right-panel-active' : ''}`}>
//         {/* Signup Form */}
//         <div className={`absolute top-0 left-0 w-1/2 h-full p-10 transition-all duration-700 ${isRightPanelActive ? 'translate-x-full opacity-100 z-10' : 'opacity-0 z-0'}`}>
//           <h2 className="text-3xl font-bold mb-6">Create Account</h2>
//           <div className="flex gap-4 mb-4">
//             <button className="border p-2 rounded-full"><i className="fab fa-facebook-f"></i></button>
//             <button className="border p-2 rounded-full"><i className="fab fa-google-plus-g"></i></button>
//             <button className="border p-2 rounded-full"><i className="fab fa-linkedin-in"></i></button>
//           </div>
//           <span className="text-sm mb-4">or use your email for registration</span>
//           <div className="w-full space-y-2 mt-4">
//             <Label htmlFor="name">Name</Label>
//             <Input type="text" name="name" value={signupInput.name} onChange={(e) => changeInputHandler(e, "signup")} placeholder="Eg. patel" required />
//             <Label htmlFor="email">Email</Label>
//             <Input type="email" name="email" value={signupInput.email} onChange={(e) => changeInputHandler(e, "signup")} placeholder="Eg. patel@gmail.com" required />
//             <Label htmlFor="password">Password</Label>
//             <Input type="password" name="password" value={signupInput.password} onChange={(e) => changeInputHandler(e, "signup")} placeholder="Eg. xyz" required />
//             <Button onClick={() => handleRegistration("signup")} disabled={registerIsLoading} className="w-full mt-4">
//               {registerIsLoading ? (
//                 <>
//                   <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
//                 </>
//               ) : (
//                 "Sign Up"
//               )}
//             </Button>
//           </div>
//         </div>

//         {/* Login Form */}
//         <div className={`absolute top-0 left-0 w-1/2 h-full p-10 transition-all duration-700 ${isRightPanelActive ? 'translate-x-full opacity-0 z-0' : 'opacity-100 z-10'}`}>
//           <h2 className="text-3xl font-bold mb-6">Sign In</h2>
//           <div className="flex gap-4 mb-4">
//             <button className="border p-2 rounded-full"><i className="fab fa-facebook-f"></i></button>
//             <button className="border p-2 rounded-full"><i className="fab fa-google-plus-g"></i></button>
//             <button className="border p-2 rounded-full"><i className="fab fa-linkedin-in"></i></button>
//           </div>
//           <span className="text-sm mb-4">or use your account</span>
//           <div className="w-full space-y-2 mt-4">
//             <Label htmlFor="email">Email</Label>
//             <Input type="email" name="email" value={loginInput.email} onChange={(e) => changeInputHandler(e, "login")} placeholder="Eg. patel@gmail.com" required />
//             <Label htmlFor="password">Password</Label>
//             <Input type="password" name="password" value={loginInput.password} onChange={(e) => changeInputHandler(e, "login")} placeholder="Eg. xyz" required />
//             <a href="#" className="text-sm text-blue-500 dark:text-blue-300 hover:underline">Forgot your password?</a>
//             <Button onClick={() => handleRegistration("login")} disabled={loginIsLoading} className="w-full mt-4">
//               {loginIsLoading ? (
//                 <>
//                   <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
//                 </>
//               ) : (
//                 "Sign In"
//               )}
//             </Button>
//           </div>
//         </div>

//         {/* Overlay */}
//         <div className={`absolute top-0 left-1/2 w-1/2 h-full bg-gradient-to-r from-pink-500 to-red-500 text-white p-10 transition-all duration-700 z-20 ${isRightPanelActive ? 'translate-x-[-100%]' : ''}`}>
//           <div className="flex flex-col justify-center h-full">
//             {isRightPanelActive ? (
//               <>
//                 <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
//                 <p className="mb-8">To stay connected with us, login with your personal info</p>
//                 <Button variant="ghost" className="border-white border text-white" onClick={() => setRightPanelActive(false)}>Sign In</Button>
//               </>
//             ) : (
//               <>
//                 <h2 className="text-3xl font-bold mb-4">Hello, Friend!</h2>
//                 <p className="mb-8">Enter your details and start your journey with us</p>
//                 <Button variant="ghost" className="border-white border text-white" onClick={() => setRightPanelActive(true)}>Sign Up</Button>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
