import React, { Suspense, useEffect } from "react";
import { useUserSelector } from "@/flux";
import { TokenService } from "@/service";
import { Outlet, useNavigate } from "react-router-dom";

const ProtectedRoute: React.FC = () => {
  const user = useUserSelector();
  const token = TokenService.getTokens();
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = () => {
    if (!user || !token) {
      navigate("/login");
    }
  };

  return (
    <Suspense>
      <Outlet />
    </Suspense>
  );
};

export default ProtectedRoute;
