import { Routes, Route } from "react-router-dom";
import { Home } from "../../pages/Home/Home";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


export const Main = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <Routes>
       <Route path="/" element={<Home />} />
      </Routes>
    
    </div>
  );
};